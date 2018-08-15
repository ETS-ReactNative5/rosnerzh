import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import {Motion, spring} from 'react-motion'

import Svg from '../common/Svg'
import Layout from './Layout'

// Constructor component;
@inject('menuStore')
@observer
class Constructor extends Component {
  render() {
    const {openMain, openOrder, state} = this.props.menuStore
    return (
      <Motion
        style={{
          y: spring(state === 'constructor' ? 0 : 100, {stiffness: 220, damping: 26}),
        }}
      >
        {({y}) => (
          <section
            className="main-constructor"
            style={{transform: `translateY(${y}vh)`}}
          >
            <Layout />
            <div onClick={openMain} className="main-constructor__arrow--back">
              <Svg id="arrow" />
            </div>
            <div onClick={openOrder} className="main-constructor__arrow--order">
              <Svg id="arrow" />
            </div>
          </section>
        )}
      </Motion>
    )
  }
}

export default Constructor
