import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'

// Humburger component;
@inject('menuStore')
@observer
class Humburger extends Component {
  render() {
    const {isOpen, toggleMenu} = this.props.menuStore
    return (
      <div
        onClick={toggleMenu}
        className={`menu-toggler ${isOpen ? 'open' : 'close'}`}
      >
        <div className="menu-toggler__inner">
          <span />
          <span />
          <span />
        </div>
      </div>
    )
  }
}

export default Humburger
