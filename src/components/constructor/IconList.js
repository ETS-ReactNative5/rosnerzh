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
    return (
      <figure className="main-constructor__settings--icons">
        <figure onClick={() => this.setState(({collapsed}) => ({collapsed: !collapsed}))}>
          <Svg id={this.state.icon} />
        </figure>
        <Motion style={styles}>
          {({x, y, o}) => (
            <Fragment>
              <Icon
                id="towelDryer"
                style={this._getComuptedStyles(0, -y, o)}
                onClick={() =>
                  this.setState(({collapsed}) => ({
                    collapsed: !collapsed,
                    icon: 'towelDryer',
                  }))
                }
              />
              <Icon
                id="towelDryer"
                style={this._getComuptedStyles(x, 0, o)}
                onClick={() =>
                  this.setState(({collapsed}) => ({
                    collapsed: !collapsed,
                    icon: 'towelDryer',
                  }))
                }
              />
              <Icon
                id="towelDryer"
                style={this._getComuptedStyles(0, y, o)}
                onClick={() =>
                  this.setState(({collapsed}) => ({
                    collapsed: !collapsed,
                    icon: 'towelDryer',
                  }))
                }
              />
              <Icon
                id="fb"
                style={this._getComuptedStyles(-x, 0, o)}
                onClick={() =>
                  this.setState(({collapsed}) => ({
                    collapsed: !collapsed,
                    icon: 'fb',
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
