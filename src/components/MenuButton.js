import React, { Component } from "react";
import PropTypes from "prop-types";

import Button from './common/Humburger';
import Logo from './common/Logo';

// MenuButton component;
class MenuButton extends Component {
  static propTypes = {};

  render() {
    return (
      <nav>
        <Button />
        <Logo />
      </nav>
    );
  }
}

export default MenuButton;