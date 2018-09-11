import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'

import Svg from '../common/Svg'
// Nav component;
@inject('menuStore')
@observer
class Nav extends Component {
  render() {
    const {openConstructor, closeMenu, openChain, openCallback} = this.props.menuStore
    return (
      <nav className="main-menu">
        <h3 className="main-menu__header">
          <span onClick={openConstructor}>Конструктор</span>
        </h3>
        <h3 className="main-menu__header">
          <span
            onClick={e => {
              e.preventDefault()
              closeMenu()
              const V = 0.3
              const top = document.getElementById('footer').getBoundingClientRect().top + 200
              const w = window.pageYOffset
              let start = null
              requestAnimationFrame(step)
              function step(time) {
                if (start === null) start = time
                let progress = time - start
                let r =
                  top < 0
                    ? Math.max(w - progress / V, w + top)
                    : Math.min(w + progress / V, w + top)
                window.scrollTo(0, r)
                if (r != w + top) {
                  requestAnimationFrame(step)
                }
              }
            }}
          >
            О нас
          </span>
        </h3>
        <h3 className="main-menu__header">
          <span>Заказать</span>
          <hr />
          <ul>
            <li onClick={openCallback}>Обратный звонок</li>
            <li onClick={openChain.bind(null, [
              'constructor',
              'order',
              'order',
            ])}>Полотенцесушитель</li>
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
