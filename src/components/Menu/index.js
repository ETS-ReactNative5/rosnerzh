import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Nav from './Nav'
import Constructor from './Constructor'

// Menu component;
class Menu extends Component {
  static propTypes = {
    menu: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
    toggleConst: PropTypes.func.isRequired,
    toggleMain: PropTypes.func.isRequired,
  }

  render() {
    const {menu, isOpen, toggleMenu, toggleConst, toggleMain} = this.props
    const menuState = 'main-menu__wrap' + (!isOpen ? ' close' : ` open ${menu}`)
    return (
      <section className={menuState}>
        <Nav toggleConst={toggleConst} />
        <Constructor toggleMain={toggleMain} />
        <div className="main-menu__close" onClick={toggleMenu} />
      </section>
    )
  }
}

export default Menu
