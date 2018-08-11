import React, { Component } from "react";
import PropTypes from 'prop-types'
import Svg from '../common/Svg';

// Constructor component;
class Constructor extends Component {
  static propTypes = {
    toggleMain: PropTypes.func.isRequired,
  }
  render() {
    return (
      <section className="main-constructor">
        <div onClick={this.props.toggleMain} className="main-constructor__arrow-back">
          <Svg id="arrow"/>
        </div>
      </section>
    );
  }
}

export default Constructor;