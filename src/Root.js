import React, {Component, Fragment} from 'react'

import Header from './components/header'
import Preview from './components/preview'
import MenuButton from './components/MenuButton'
import Benefits from './components/Benefits'
import Grid from './components/Gird'
import Footer from './components/footer'
import Menu from './components/Menu';
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

  toggleMenu = () => this.setState(({menu}) => ({menu: menu === 'close' ? 'open' : 'close'}))

  render() {
    return (
      <Fragment>
        <MenuButtonContext.Provider
          value={{isOpen: this.state.menu !== 'close' ? true : false, toggleMenu: this.toggleMenu}}
        >
          <MenuButton />
          <Menu />
        </MenuButtonContext.Provider>
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
