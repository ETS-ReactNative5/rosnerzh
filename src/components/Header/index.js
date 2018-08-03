import React, {Component, Fragment} from 'react'
import Video from './Video';

// Header component;
class Header extends Component {
  render() {
    return (
      <header>
        <Video />
        <h1>Полотенцесушитель для вашей ваны</h1>
        <p>Мы поможем найти идеальную сушку для вас</p>
        <p>большой выбор Любой формы, цвета и размера</p>
      </header>
    )
  }
}

export default Header
