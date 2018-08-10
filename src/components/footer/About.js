import React from 'react'
import {Parallax} from 'react-scroll-parallax'
import Svg from '../common/Svg'

// About stateless component;
function About() {
  return (
    <main className="footer__main">
      <Parallax
        className="footer__about"
        offsetYMax={-50}
        offsetYMin={20}
        slowerScrollRate
        tag="div"
      >
        <h2>Как мы работаем</h2>
        <p>
          Сразу после подтверждения заказ отправляется на производство. После проверки
          полотенцесушители попадают в курьерскую службу. Вы можете оплатить наличными или
          банковской картой после получения.
        </p>
        <ul>
          <li>
            <a href="tel:+74952012514">+7 (495) 201-25-14</a>
          </li>
          <li>
            <a href="mailto:info@rosnerzh.ru">info@rosnerzh.ru</a>
          </li>
          <li>
            <address>Ул. Скольнический Вал, 1а</address>
          </li>
          <li>
            <time>Пн - Сб, с 9:00 до 18:00</time>
          </li>
        </ul>
      </Parallax>
      <div className="footer__copy">
        <p>Рос Нерж © 2018</p>
        <div className="footer__social">
          <a href="#">
            <Svg id="vk" />
          </a>
          <a href="#">
            <Svg id="fb" />
          </a>
          <a href="#">
            <Svg id="instagram" />
          </a>
        </div>
      </div>
    </main>
  )
}

export default About
