import React, { Component } from "react";

import Button from './common/Humburger';
import Logo from './common/Logo';

// MenuButton component;
class MenuButton extends Component {
  render() {
    return (
      <nav className="menu">
        <Button />
        <Logo />
      </nav>
    );
  }
}

export default MenuButton;