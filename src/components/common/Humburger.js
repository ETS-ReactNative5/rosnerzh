import React, {Component} from 'react'

import {MenuButtonContext} from '../../Root'

// Humburger component;
class Humburger extends Component {
  render() {
    return (
      <MenuButtonContext.Consumer>
        {({isOpen, toggleMenu}) => (
          <div onClick={toggleMenu} className={`menu-toggler ${isOpen ? 'open' : 'close'}`}>
            <div className="menu-toggler__inner">
              <span />
              <span />
              <span />
            </div>
          </div>
        )}
      </MenuButtonContext.Consumer>
    )
  }
}

export default Humburger
