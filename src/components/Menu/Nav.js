import React, {Component} from 'react'

// Nav component;
class Nav extends Component {
  render() {
    return (
      <nav className="main-menu">
        <h3 className="main-menu__header">
          <span>Конструктор</span>
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
          <a href="tel:+74952012514">+7 (495) 201-25-14</a>
          <a href="mailto:info@rosnerzh.ru">info@rosnerzh.ru</a>
          <address>Ул. Скольнический Вал, 1а</address>
          <time>Пн - Сб, с 9:00 до 18:00</time>
        </section>
      </nav>
    )
  }
}

export default Nav
