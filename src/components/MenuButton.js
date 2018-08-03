import React, { Component } from "react";
import PropTypes from "prop-types";

import Button from './commeon/Humburger';

// MenuButton component;
class MenuButton extends Component {
  static propTypes = {};

  render() {
    return (
      <nav>
        <Button />
      </nav>
    );
  }
}

export default MenuButton;