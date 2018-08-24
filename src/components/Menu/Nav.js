import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'

import Svg from '../common/Svg'
// Nav component;
@inject('menuStore')
@observer
class Nav extends Component {
  render() {
    const {openConstructor} = this.props.menuStore
    return (
      <nav className="main-menu">
        <h3 className="main-menu__header">
          <span onClick={openConstructor}>Конструктор</span>
        </h3>
        <h3 className="main-menu__header">
          <span>О нас</span>
        </h3>
        <h3 className="main-menu__header">
          <span>Заказать</span>
          <hr />
          <ul>
            <li>Обратный звонок</li>
            <li>Полотенцесушитель</li>
          </ul>
        </h3>
        <hr />
        <section className="main-menu__footer">
          <a href="tel:+74952012514">
            <Svg id="phone" />
            <span>+7 (495) 201-25-14</span>
          </a>
          <a href="mailto:info@rosnerzh.ru">
            <Svg id="letter" />
            <span>info@rosnerzh.ru</span>
          </a>
          <address>
            <Svg id="marker" />
            <span>Ул. Скольнический Вал, 1а</span>
          </address>
          <time>
            <Svg id="clock" />
            <span>Пн - Сб, с 9:00 до 18:00</span>
          </time>
        </section>
      </nav>
    )
  }
}

export default Nav
