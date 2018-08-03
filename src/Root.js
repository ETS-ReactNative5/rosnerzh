import React, { Component, Fragment } from "react";

import Header from './components/Header';
import './css/main.css';

// Root component;
class Root extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <h1>Root component</h1>
      </Fragment>
    );
  }
}

export default Root;