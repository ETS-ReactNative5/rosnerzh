import React, {Component} from 'react'
import {ParallaxProvider} from 'react-scroll-parallax'
import {BrowserRouter as RouterProvider} from 'react-router-dom'

import Root from './Root'
import {MobxProvider} from './store'

class App extends Component {
  render() {
    return (
      <RouterProvider>
        <MobxProvider>
          <ParallaxProvider>
            <Root />
          </ParallaxProvider>
        </MobxProvider>
      </RouterProvider>
    )
  }
}

export default App
