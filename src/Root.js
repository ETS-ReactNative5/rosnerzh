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
