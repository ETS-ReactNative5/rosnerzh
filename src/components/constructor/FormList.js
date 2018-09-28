import React, {Component, Fragment} from 'react'
import {inject, observer} from 'mobx-react'
import {Motion, StaggeredMotion, spring} from 'react-motion'
import PropTypes from 'prop-types'

import Svg from '../common/Svg'
import Icon from './Icon'
import {opacityFastPreset, transformPreset, animationRadius} from '../../settings/conf'

// FormList component; Awesome animations by clicking
// For choose the form of dryer
@inject('menuStore')
@inject('constStore')
@observer
class FormList extends Component {
  static propTypes = {
    isCollapsed: PropTypes.bool.isRequired,
    collapse: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
    icons: PropTypes.array.isRequired,
  }

  /**
  * Returns styles of the end stage
  * And arrange them by circle
  * @param Object{Object}, i{Number}
  * @return Styles{String}
  * @private
  */
  _getComuptedStyles = ({unit, opacity}, i) => {
    const angle = (2 * Math.PI) / this.props.icons.length
    return {
      transform: `translate(${unit * Math.cos(angle * i)}px, ${unit *
        Math.sin(angle * i)}px) scale(${opacity})`,
    }
  }

  /**
  * Stagged animation, returns the style depends by id
  * In first stage we update 1st element
  * Second we update 1st element to 2nd stage, and 2nd el to 1st stage ...
  * Third 1 el to 3 st, 2 el to 2 st, 3 el to 1 st
  * ...until last el would be the last staged
  * @param prevStyels{Array}
  * @return Array of styles{Array}
  * @private
  */
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
    const {isCollapsed, collapse, disabled, icons} = this.props
    const figuresStyle = {
      s: spring(isCollapsed ? 0.5 : 1, transformPreset),
      opacity: spring(isCollapsed ? 0.3 : 1, opacityFastPreset),
    }
    const {form, setForm} = this.props.constStore
    return (
      <figure className="main-constructor__settings--icons icons-form__set">
        <figure onClick={disabled ? () => {} : collapse} disabled={disabled}>
          <Motion style={figuresStyle}>
            {({s, opacity}) => (
              <div style={{transform: `scale(${s})`, filter: `saturate(${opacity})`}}>
                <Svg id={icons[form].id} disabled={disabled} />
              </div>
            )}
          </Motion>
          <figcaption>{icons[form].figcaption}</figcaption>
        </figure>
        <StaggeredMotion
          key={icons.length} // Wootaa faakk iz goin aaan ??! - Force update
                             //... so, when icons array have changed, we re-render <StaggeredMotion/>...
          defaultStyles={[...new Array(icons.length)].map(() => ({unit: 0, opacity: 0}))}
          styles={this._getStaggedStyles}
        >
          {iconsStyle => (
            <Fragment>
              {iconsStyle.map((styles, i) => (
                <Icon
                  key={i}
                  entity={icons[i]}
                  className={i === form ? 'active' : ''}
                  style={this._getComuptedStyles(styles, i)}
                  onClick={() => {
                    setForm(i)
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
