import React, {Fragment} from 'react'

// About stateless component;
function About() {
  return (
    <main className="footer__main">
      <div className="footer__about">
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
          <li>Пн - Сб, с 9:00 до 18:00</li>
        </ul>
      </div>
      <div className="footer__copy">
        <p>Рос Нерж © 2018</p>
        <div className="footer_social">
          <a href="#">vk</a>
          <a href="#">fb</a>
          <a href="#">ig</a>
        </div>
      </div>
    </main>
  )
}

export default About
