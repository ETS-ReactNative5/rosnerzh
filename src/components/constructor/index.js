import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import {Motion, spring} from 'react-motion'

import Svg from '../common/Svg'
import ConstuctorLayout from './Constructor'
import OrderLayout from './Order'
import Price from './Price'
import {opacityFastPreset} from '../../settings/conf'

// Constructor component;
@inject('menuStore')
@observer
class Constructor extends Component {
  render() {
    const {openMain, openOrder, openConstructor, state} = this.props.menuStore
    return (
      <Motion
        style={{
          y: spring(
            ~['constructor', 'order', 'thank-you'].indexOf(state) ? 0 : 100,
            opacityFastPreset,
          ),
        }}
      >
        {({y}) => (
          <section className="main-constructor" style={{transform: `translateY(${y}vh)`}}>
            <div className="main-constructor__layout">
              <ConstuctorLayout />
              <OrderLayout>
                <div onClick={openConstructor} className="main-constructor__arrow--main">
                  <Svg id="arrow" />
                </div>
              </OrderLayout>
            </div>
            <div onClick={openMain} className="main-constructor__arrow--back">
              <Svg id="arrow" />
            </div>
            <div onClick={openOrder} className="main-constructor__arrow--order">
              <Svg id="arrow" />
            </div>
            <Price />
          </section>
        )}
      </Motion>
    )
  }
}

export default Constructor
