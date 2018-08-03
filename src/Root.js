import React, {Component, Fragment} from 'react'

import Header from './components/Header'
import './css/main.css'

// Root component;
class Root extends Component {
  state = {
    menu: 'close',
  }

  render() {
    return (
      <Fragment>
        <Header isMobile={false} />
        <h1>Root component</h1>
      </Fragment>
    )
  }
}

export default Root
