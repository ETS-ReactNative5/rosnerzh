import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Nav from './Nav';

// Menu component;
class Menu extends Component {
  static propTypes = {
    menu: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
  }

  render() {
    const {menu, isOpen, toggleMenu} = this.props
    return (
      <section className={`main-menu__wrap${isOpen ? ' open' : ' close'}`}>
        <Nav/>
        <div className="main-menu__close" onClick={toggleMenu} />
      </section>
    )
  }
}

export default Menu
