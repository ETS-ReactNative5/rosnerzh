import React, {Component} from 'react'

import {MenuButtonContext} from '../../Root'

// Logo component;
class Logo extends Component {
  render() {
    return (
      <MenuButtonContext.Consumer>
        {({isOpen}) => (
          <div className={`logo${isOpen? ' open': ' close'}`}>
            <span>Рос</span>
            <figure/>
            <span>Нерж</span>
          </div>
        )}
      </MenuButtonContext.Consumer>
    )
  }
}

export default Logo
