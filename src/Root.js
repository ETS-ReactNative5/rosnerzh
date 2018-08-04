import React, {Component, Fragment} from 'react'

import Header from './components/Header'
import Menu from './components/MenuButton';
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
          <Menu />
        </MenuButtonContext.Provider>
        <Header isMobile={false} />
        <h1>Root component</h1>
      </Fragment>
    )
  }
}

export default Root
