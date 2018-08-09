import React, { Component } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

import Root from './Root';
import 'antd/dist/antd.css'

class App extends Component {
  render() {
    console.log(" LOG ___ process.env ", process.env );
    return (
      <ParallaxProvider>
        <Root />
      </ParallaxProvider>
    );
  }
}

export default App;