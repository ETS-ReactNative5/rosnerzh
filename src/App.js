import React, {Component} from 'react'
import {ParallaxProvider} from 'react-scroll-parallax'
import {Provider as MobxProvider} from 'mobx-react'
import DevTools from 'mobx-react-devtools'

import Root from './Root'
import menuStore from './store/Menu'
import constStore from './store/Constructor'

class App extends Component {
  render() {
    console.log(' LOG ___ process.env ', process.env)
    return (
      <MobxProvider menuStore={menuStore} constStore={constStore}>
        <ParallaxProvider>
          <Root />
          <DevTools />
        </ParallaxProvider>
      </MobxProvider>
    )
  }
}

export default App
