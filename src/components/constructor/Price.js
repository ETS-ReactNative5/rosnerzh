import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'

// Price component;
@inject('constStore')
@observer
class Price extends Component {
  render() {
    const {price} = this.props.constStore
    return (
      <div className="main-constructor__price">
        <span>{`${price} руб.`}</span>
      </div>
    )
  }
}

export default Price
