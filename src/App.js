import React, {Component} from 'react'
import {ParallaxProvider} from 'react-scroll-parallax'
import {BrowserRouter as RouterProvider, Route} from 'react-router-dom'

import Root from './Root'
import {MobxProvider} from './store'

class App extends Component {
  render() {
    return (
      <RouterProvider>
        <Route path="/:token">
          <MobxProvider>
            <ParallaxProvider>
              <Root />
            </ParallaxProvider>
          </MobxProvider>
        </Route>
      </RouterProvider>
    )
  }
}

export default App
