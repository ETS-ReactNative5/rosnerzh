import React, {Component, Fragment} from 'react'
import {inject, observer} from 'mobx-react'
import {Motion, StaggeredMotion, spring} from 'react-motion'
import PropTypes from 'prop-types'

import Svg from '../common/Svg'
import Icon from './Icon'
import {
  opacityFastPreset,
  opacityPreset,
  transformPreset,
  formCount,
} from '../../settings/conf'

// FormList component;
@inject('constStore')
@observer
class FormList extends Component {
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

  _getComuptedStyles = ({unit, opacity}, i) => {
    const angle = (2 * Math.PI) / formCount
    return {
      transform: `translate(${unit * Math.cos(angle * i)}px, ${unit *
        Math.sin(angle * i)}px) scale(${opacity})`
    }
  }

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
    const icons = [
      'towelDryer',
      'towelDryer',
      'towelDryer',
      'fb',
      'towelDryer',
      'towelDryer',
      'towelDryer',
      'towelDryer',
      'towelDryer',
    ]
    return (
      <figure className="main-constructor__settings--icons icons-form__set">
        <figure onClick={collapse}>
          <Motion style={figuresStyle}>
            {({s, opacity}) => (
              <div style={{transform: `scale(${s})`, filter: `saturate(${opacity})`}}>
                <Svg id={this.state.icon} />
              </div>
            )}
          </Motion>
        </figure>
        <StaggeredMotion
          defaultStyles={[...new Array(formCount)].map(() => ({unit: 0, opacity: 0}))}
          styles={this._getStaggedStyles}
        >
          {iconsStyle => (
            <Fragment>
              {iconsStyle.map((styles, i) => (
                <Icon
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

export default FormList
