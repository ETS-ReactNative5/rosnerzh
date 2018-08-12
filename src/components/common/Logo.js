import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'

import {MenuButtonContext} from '../../Root'

// Logo component;
@inject('menuStore')
@observer
class Logo extends Component {
  render() {
    const {isOpen} = this.props.menuStore
    return (
      <div className={`logo ${isOpen() ? 'open' : 'close'}`}>
        <span>Рос</span>
        <figure />
        <span>Нерж</span>
      </div>
    )
  }
}

export default Logo
