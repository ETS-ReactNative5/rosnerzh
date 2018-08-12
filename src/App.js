import React, {Component} from 'react'
import {ParallaxProvider} from 'react-scroll-parallax'
import {Provider as MobxProvider} from 'mobx-react'
import DevTools from 'mobx-react-devtools'

import Root from './Root'
import 'antd/dist/antd.css'
import menuStore from './store/Menu'

class App extends Component {
  render() {
    console.log(' LOG ___ process.env ', process.env)
    return (
      <MobxProvider menuStore={menuStore}>
        <ParallaxProvider>
          <Root />
          <DevTools />
        </ParallaxProvider>
      </MobxProvider>
    )
  }
}

export default App
