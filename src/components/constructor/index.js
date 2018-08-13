import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'

import Svg from '../common/Svg'
import Layout from './Layout';

// Constructor component;
@inject('menuStore')
@observer
class Constructor extends Component {
  render() {
    const {openMain, openOrder} = this.props.menuStore
    return (
      <section className="main-constructor">
        <Layout />
        <div onClick={openMain} className="main-constructor__arrow--back">
          <Svg id="arrow" />
        </div>
        <div onClick={openOrder} className="main-constructor__arrow--order">
          <Svg id="arrow" />
        </div>
      </section>
    )
  }
}

export default Constructor
