import React, { Component } from "react";
import {inject, observer} from 'mobx-react'

import Svg from '../common/Svg';
// ThankYou component;
@inject('menuStore')
@observer
class ThankYou extends Component {
  static propTypes = {};

  render() {
    const {openMain} = this.props.menuStore
    return (
      <div className="main-thankyou">
        <Svg id="ty" />
        <h2>Спасибо за ваш заказ!</h2>
        <p> Наш оператор скоро с Вами свяжется</p>
        <div onClick={openMain}>
          <Svg id="arrow" />
        </div>
      </div>
    );
  }
}

export default ThankYou;