import React, { Component } from "react";
import Svg from '../common/Svg';

// Constructor component;
class Constructor extends Component {
  static propTypes = {};

  render() {
    return (
      <section className="preview__constructor">
        <hgroup>
          <Svg id="towelDryer" />
          <Svg id="ladder" />
          <Svg id="fType" />
          <Svg id="pType" />
          <Svg id="towelDryer" />
        </hgroup>
        <main></main>
      </section>
    );
  }
}

export default Constructor;