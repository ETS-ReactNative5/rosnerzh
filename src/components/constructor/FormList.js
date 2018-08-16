import React, {Component, Fragment} from 'react'
import {inject, observer} from 'mobx-react'
import {Motion, spring} from 'react-motion'
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
    this.props.constStore.setType(icon)
  }

  _parseComuptedStyles = ({x, y, o}) => {
    return {
    transform: `translate(${x.val}px, ${y.val}px)`,
    opacity: o.val,
  }}
  _getComuptedStyles = (x, y, opacity) => ({
    transform: `translate(${x}px, ${y}px)`,
    opacity,
  })

  render() {
    const {isCollapsed, collapse} = this.props
    const radius = 107
    const angle = 360 / formCount
    const coordinates = [...new Array(formCount)].map((_, i) => ({
      x: spring(isCollapsed ? Math.cos(angle * i) * radius : 0, transformPreset), // 82 cos(40)
      y: spring(isCollapsed ? Math.sin(angle * i) * radius : 0, transformPreset), // 69 sin(40)
      o: spring(isCollapsed ? 1 : 0, opacityPreset),
    }))
    const styles = {
      x: spring(isCollapsed ? -107 : 0, transformPreset), // 82 cos(40)
      y: spring(isCollapsed ? -107 : 0, transformPreset), // 69 sin(40)
      o: spring(isCollapsed ? 1 : 0, opacityPreset),
    }
    const stylesFigure = {
      s: spring(isCollapsed ? 0.5 : 1, transformPreset),
      opacity: spring(isCollapsed ? 0.3 : 1, opacityFastPreset),
    }
    const icons = ['towelDryer', 'towelDryer', 'towelDryer', 'fb']
    return (
      <figure className="main-constructor__settings--icons icons-form__set">
        <figure onClick={collapse}>
          <Motion style={stylesFigure}>
            {({s, opacity}) => (
              <div style={{transform: `scale(${s})`, opacity}}>
                <Svg id={this.state.icon} />
              </div>
            )}
          </Motion>
        </figure>
        <Motion style={styles}>
          {({x, y, o}) => (
            <Fragment>
              <Icon
                id={icons[0]}
                style={this._getComuptedStyles(0, -y, o)}
                onClick={() => {
                  this.setState(() => ({icon: icons[0]}))
                  collapse()
                }}
              />
              <Icon
                id={icons[1]}
                style={this._getComuptedStyles(x, 0, o)}
                onClick={() => {
                  this.setState(() => ({icon: icons[1]}))
                  collapse()
                }}
              />
              <Icon
                id={icons[2]}
                style={this._getComuptedStyles(0, y, o)}
                onClick={() => {
                  this.setState(() => ({icon: icons[2]}))
                  collapse()
                }}
              />
              <Icon
                id={icons[3]}
                style={this._getComuptedStyles(96.6964469808557, -45.812630805036314, 1)}
                onClick={() => {
                  this.setState(() => ({icon: icons[3]}))
                  collapse()
                }}
              />
            </Fragment>
          )}
        </Motion>
      </figure>
    )
  }
}

export default FormList
