import React, {Component, Fragment} from 'react'
import {inject, observer} from 'mobx-react'
import {Motion, StaggeredMotion, spring} from 'react-motion'
import PropTypes from 'prop-types'

import Svg from '../common/Svg'
import Icon from './Icon'
import {
  opacityFastPreset,
  transformPreset,
  typeIcons as icons,
  animationRadius,
} from '../../settings/conf'

// TypeList component;
@inject('menuStore')
@inject('constStore')
@observer
class TypeList extends Component {
  static propTypes = {
    isCollapsed: PropTypes.bool.isRequired,
    collapse: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
  }

  _getComuptedStyles = ({unit, opacity}, i) => {
    const angle = (2 * Math.PI) / icons.length
    return {
      transform: `translate(${unit * Math.cos(angle * i)}px, ${unit *
        Math.sin(angle * i)}px) scale(${opacity})`,
    }
  }

  _getStaggedStyles = prevStyles => {
    const {isCollapsed} = this.props
    const radius = this.props.menuStore.isMobile
      ? animationRadius.mobile
      : animationRadius.desktop
    const result = prevStyles.map((_, i) => {
      if (!isCollapsed)
        return i === 0
          ? {
              unit: spring(0, transformPreset),
              opacity: spring(0, transformPreset),
            }
          : {
              unit: spring(prevStyles[i - 1].unit, transformPreset),
              opacity: spring(prevStyles[i - 1].opacity, transformPreset),
            }
      return i === 0
        ? {
            unit: spring(radius, transformPreset),
            opacity: spring(1, transformPreset),
          }
        : {
            unit: spring(prevStyles[i - 1].unit, transformPreset),
            opacity: spring(prevStyles[i - 1].opacity, transformPreset),
          }
    })
    return result
  }

  render() {
    const {isCollapsed, collapse, disabled} = this.props
    const figuresStyle = {
      s: spring(isCollapsed ? 0.5 : 1, transformPreset),
      opacity: spring(isCollapsed ? 0.3 : 1, opacityFastPreset),
    }
    const {type, setType} = this.props.constStore
    return (
      <figure className="main-constructor__settings--icons">
        <figure onClick={disabled ? () => {} : collapse} disabled={disabled}>
          <Motion style={figuresStyle}>
            {({s, opacity}) => (
              <div style={{transform: `scale(${s})`, filter: `saturate(${opacity})`}}>
                <Svg id={type} disabled={disabled} />
              </div>
            )}
          </Motion>
          <figcaption>Тип</figcaption>
        </figure>
        <StaggeredMotion
          defaultStyles={[...new Array(icons.length)].map(() => ({unit: 0, opacity: 0}))}
          styles={this._getStaggedStyles}
        >
          {iconsStyle => (
            <Fragment>
              {iconsStyle.map((styles, i) => (
                <Icon
                  key={i}
                  className={icons[i].id === type ? 'active' : ''}
                  entity={icons[i]}
                  style={this._getComuptedStyles(styles, i)}
                  onClick={() => {
                    setType(icons[i].id)
                    collapse()
                  }}
                />
              ))}
            </Fragment>
          )}
        </StaggeredMotion>
      </figure>
    )
  }
}

export default TypeList
