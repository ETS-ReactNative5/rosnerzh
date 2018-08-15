import React, {Component} from 'react'
import {Motion, spring} from 'react-motion'

import Svg from '../common/Svg'
import Icon from './Icon'
// IconList component;
class IconList extends Component {
  state = {
    collapsed: false,
    grow: false,
  }

  _getComuptedStyles = ({top, left, width, height}) => ({
    top: `${top}%`,
    left: `${left}%`,
    width: `${width}px`,
    height: `${height}px`,
    zIndex: 2
  })

  render() {
    console.log(' LOG ___ this.state.collapsed ', this.state)
    const styles = {
      top: spring(this.state.grow ? 0 : 0),
      left: spring(this.state.grow ? 0 : 0),
      width: spring(this.state.grow ? 130 : 65),
      height: spring(this.state.grow ? 130 : 65),
      zIndex: spring(this.state.grow ? 2 : 1),
    }
    return (
      <figure
        className={`main-constructor__settings--icons${
          this.state.collapsed ? ' collapse' : ''
        }`}
      >
        <figure onClick={() => this.setState(({collapsed}) => ({collapsed: !collapsed}))}>
          <Svg id="towelDryer" />
        </figure>
        <Motion style={styles}>
          {styles => (
            <Icon
              style={this._getComuptedStyles(styles)}
              onClick={() => this.setState(({grow}) => ({grow: !grow}))}
            />
          )}
        </Motion>
        <Icon />
        <Icon />
        <Icon />
      </figure>
    )
  }
}

export default IconList
