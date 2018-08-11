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

  componentWillUpdate(_, {menu}) {
    if (menu === 'close') document.body.classList.add('inactive-menu')
    else document.body.classList.remove('inactive-menu')
  }

  _isOpen = menu => (menu !== 'close' ? true : false)

  _toggleConst = () => this.setState(() => ({menu: 'constructor'}))

  _toggleMain = () => this.setState(() => ({menu: 'main'}))

  _toggleMenu = () => this.setState(({menu}) => ({menu: menu === 'close' ? 'main' : 'close'}))

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
          toggleConst={this._toggleConst}
          toggleMain={this._toggleMain}
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
