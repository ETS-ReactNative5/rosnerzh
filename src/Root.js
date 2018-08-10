import React, {Component, Fragment} from 'react'

import Header from './components/header'
import Preview from './components/preview'
import MenuButton from './components/MenuButton'
import Benefits from './components/Benefits'
import Grid from './components/Gird'
import Footer from './components/footer'
import Menu from './components/Menu'
import './css/main.css'

export const MenuButtonContext = React.createContext({
  isOpen: false,
  toggleMenu: () => {},
})

// Root component;
class Root extends Component {
  state = {
    menu: 'close',
  }

  componentDidUpdate(_, {menu}) {
    if (menu !== 'open') document.body.classList.add('active-menu')
    else document.body.classList.remove('active-menu')
  }

  _isOpen = menu => (menu !== 'close' ? true : false)

  _toggleMenu = () => this.setState(({menu}) => ({menu: menu === 'close' ? 'open' : 'close'}))

  render() {
    return (
      <Fragment>
        <MenuButtonContext.Provider
          value={{isOpen: this._isOpen(this.state.menu), toggleMenu: this._toggleMenu}}
        >
          <MenuButton />
        </MenuButtonContext.Provider>
        <Menu
          isOpen={this._isOpen(this.state.menu)}
          menu={this.state.menu}
          toggleMenu={this._toggleMenu}
        />
        <Header isMobile={false} />
        <Preview />
        <Benefits />
        <Grid />
        <Footer />
      </Fragment>
    )
  }
}

export default Root
