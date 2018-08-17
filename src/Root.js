import React, {Component, Fragment} from 'react'
import {inject, observer} from 'mobx-react'

import Header from './components/header'
import Preview from './components/preview'
import MenuButton from './components/MenuButton'
import Benefits from './components/Benefits'
import Grid from './components/Gird'
import Footer from './components/footer'
import Menu from './components/menu'
import 'antd/dist/antd.css'
import './css/main.css'

// Root component;
@inject('menuStore')
@observer
class Root extends Component {
  render() {
    const {isOpen} = this.props.menuStore
    if (isOpen) document.body.classList.remove('inactive-menu')
    else document.body.classList.add('inactive-menu')
    return (
      <Fragment>
        <MenuButton />
        <Menu />
        <main
          className="blur-container"
          style={{
            filter: isOpen ? 'blur(5px) contrast(.7) brightness(.8)' : 'blur(0) contrast(1) brightness(1)',
            boxShadow: '0 0 0 50vmax rgba(0,0,0,.7)',
          }}
        >
          <Header isMobile={false} />
          <Preview />
          <Benefits />
          <Grid />
          <Footer />
        </main>
      </Fragment>
    )
  }
}

export default Root
