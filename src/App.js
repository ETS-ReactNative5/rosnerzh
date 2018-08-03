import React, { Component, Fragment } from 'react';
import Root from './Root';

import 'antd/dist/antd.css'

class App extends Component {
  render() {
    console.log(" LOG ___ process.env ", process.env );
    return (
      <Fragment>
        <Root />
      </Fragment>
    );
  }
}

export default App;