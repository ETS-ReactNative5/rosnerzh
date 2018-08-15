import React, {Component, Fragment} from 'react'
import {inject, observer} from 'mobx-react'
import {Motion, spring} from 'react-motion'

import Svg from '../common/Svg'
import Icon from './Icon'

// IconList component;
@inject('constStore')
@observer
class IconList extends Component {
  state = {
    collapsed: false,
    icon: 'towelDryer',
  }

  componentWillUpdate(_, {icon}) {
    this.props.constStore.setType(icon)
  }

  _getComuptedStyles = (x, y, opacity) => ({
    transform: `translate(${x}px, ${y}px)`,
    opacity,
  })

  render() {
    const styles = {
      x: spring(this.state.collapsed ? -107 : 0, {stiffness: 120, damping: 12}),
      y: spring(this.state.collapsed ? -107 : 0, {stiffness: 120, damping: 12}),
      o: spring(this.state.collapsed ? 1 : 0, {stiffness: 80, damping: 26}),
    }
    const icons = ['towelDryer', 'towelDryer', 'towelDryer', 'fb']
    return (
      <figure className="main-constructor__settings--icons">
        <figure onClick={() => this.setState(({collapsed}) => ({collapsed: !collapsed}))}>
          <Svg id={this.state.icon} />
        </figure>
        <Motion style={styles}>
          {({x, y, o}) => (
            <Fragment>
              <Icon
                id={icons[0]}
                style={this._getComuptedStyles(0, -y, o)}
                onClick={() =>
                  this.setState(({collapsed}) => ({
                    collapsed: !collapsed,
                    icon: icons[0],
                  }))
                }
              />
              <Icon
                id={icons[1]}
                style={this._getComuptedStyles(x, 0, o)}
                onClick={() =>
                  this.setState(({collapsed}) => ({
                    collapsed: !collapsed,
                    icon: icons[1],
                  }))
                }
              />
              <Icon
                id={icons[2]}
                style={this._getComuptedStyles(0, y, o)}
                onClick={() =>
                  this.setState(({collapsed}) => ({
                    collapsed: !collapsed,
                    icon: icons[2],
                  }))
                }
              />
              <Icon
                id={icons[3]}
                style={this._getComuptedStyles(-x, 0, o)}
                onClick={() =>
                  this.setState(({collapsed}) => ({
                    collapsed: !collapsed,
                    icon: icons[3],
                  }))
                }
              />
            </Fragment>
          )}
        </Motion>
      </figure>
    )
  }
}

export default IconList
