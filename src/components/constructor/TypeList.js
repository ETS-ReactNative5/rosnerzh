import React, {Component, Fragment} from 'react'
import {inject, observer} from 'mobx-react'
import {Motion, StaggeredMotion, spring} from 'react-motion'
import PropTypes from 'prop-types'

import Svg from '../common/Svg'
import Icon from './Icon'
import {opacityFastPreset, transformPreset} from '../../settings/conf'

const coordinateMask = [{x: 0, y: -1}, {x: 1, y: 0}, {x: 0, y: 1}, {x: -1, y: 0}]

// TypeList component;
@inject('constStore')
@observer
class TypeList extends Component {
  static propTypes = {
    isCollapsed: PropTypes.bool.isRequired,
    collapse: PropTypes.func.isRequired,
  }
  state = {
    icon: 'towelDryer',
  }

  componentWillUpdate(_, {icon}) {
    icon && this.props.constStore.setType(icon)
  }

  _getComuptedStyles = ({unit, opacity}, i) => ({
    transform: `translate(${unit * coordinateMask[i].x}px, ${unit *
      coordinateMask[i].y}px) scale(${opacity})`
  })

  _getStaggedStyles = prevStyles => {
    // prevStyles.map(({unit}, i) => console.log(`unit ${i} = ${unit}`))
    const {isCollapsed} = this.props
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
            unit: spring(107, transformPreset),
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
    const {isCollapsed, collapse} = this.props
    const figuresStyle = {
      s: spring(isCollapsed ? 0.5 : 1, transformPreset),
      opacity: spring(isCollapsed ? 0.3 : 1, opacityFastPreset),
    }
    const icons = ['towelDryer', 'pType', 'fType', 'ladder']
    return (
      <figure className="main-constructor__settings--icons">
        <figure onClick={collapse}>
          <Motion style={figuresStyle}>
            {({s, opacity}) => (
              <div style={{transform: `scale(${s})`, filter: `saturate(${opacity})`}}>
                <Svg id={this.state.icon} />
              </div>
            )}
          </Motion>
          <figcaption>Тип</figcaption>
        </figure>
        <StaggeredMotion
          defaultStyles={[...new Array(4)].map(() => ({unit: 0, opacity: 0}))}
          styles={this._getStaggedStyles}
        >
          {iconsStyle => (
            <Fragment>
              {iconsStyle.map((styles, i) => (
                <Icon
                  key={i}
                  id={icons[i]}
                  style={this._getComuptedStyles(styles, i)}
                  onClick={() => {
                    this.setState(() => ({icon: icons[i]}))
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