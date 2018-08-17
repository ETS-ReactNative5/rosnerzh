import React, {Component, Fragment} from 'react'
import {inject, observer} from 'mobx-react'
import {Motion, StaggeredMotion, spring} from 'react-motion'
import PropTypes from 'prop-types'

import Svg from '../common/Svg'
import Icon from './Icon'
import {opacityFastPreset, opacityPreset, transformPreset} from '../../settings/conf'

const coordinates = [
  {x: 0, y: -107, o: 0},
  {x: 107, y: 0, o: 0},
  {x: 0, y: 107, o: 0},
  {x: -107, y: 0, o: 0},
]

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
    this.props.constStore.setType(icon)
  }

  _getComuptedStyles = (x, y, opacity) => ({
    transform: `translate(${x}px, ${y}px)`,
    opacity,
  })

  _getStaggedStyles = prevStyles => {
    const {isCollapsed} = this.props
    const res = prevStyles.map((_, i) => ({
      x: spring(isCollapsed ? coordinates[i].x : 0, transformPreset),
      y: spring(isCollapsed ? coordinates[i].y : 0, transformPreset),
      o: spring(isCollapsed ? 1 : 0, opacityPreset),
    }))
    return res
  }

  render() {
    const {isCollapsed, collapse} = this.props
    const figuresStyle = {
      s: spring(isCollapsed ? 0.5 : 1, transformPreset),
      opacity: spring(isCollapsed ? 0.3 : 1, opacityFastPreset),
    }
    const icons = ['towelDryer', 'towelDryer', 'towelDryer', 'fb']
    return (
      <figure className="main-constructor__settings--icons">
        <figure onClick={collapse}>
          <Motion style={figuresStyle}>
            {({s, opacity}) => (
              <div style={{transform: `scale(${s})`, opacity}}>
                <Svg id={this.state.icon} />
              </div>
            )}
          </Motion>
        </figure>
        <StaggeredMotion
          defaultStyles={[...new Array(4)].map(() => ({x: 0, y: 0, o: 0}))}
          styles={this._getStaggedStyles}
        >
          {iconsStyle => (
            <Fragment>
              {iconsStyle.map(({x, y, o}, i) => (
                <Icon
                  id={icons[i]}
                  style={this._getComuptedStyles(x-i, y-i, o)}
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
