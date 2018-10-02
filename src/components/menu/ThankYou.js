import React, {Component} from 'react'
import {inject} from 'mobx-react'

import Svg from '../common/Svg'
// ThankYou component;
@inject('menuStore')
class ThankYou extends Component {
  static propTypes = {}

  render() {
    const {openMain} = this.props.menuStore
    return (
      <div className="main-thankyou">
        <div data-testid="open-main__svg" onClick={openMain}>
          <Svg id="ty" />
        </div>
        <h2>Спасибо за ваш заказ!</h2>
        <p> Наш оператор скоро с Вами свяжется</p>
        <div data-testid="open-main__arrow" onClick={openMain}>
          <Svg id="arrow" />
        </div>
      </div>
    )
  }
}

export default ThankYou
