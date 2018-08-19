import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'

import Svg from '../common/Svg'

// Energy component;
@inject('constStore')
@observer
class Energy extends Component {
  render() {
    const {energy, setEnergy} = this.props.constStore
    return (
      <div className="main-constructor__energy">
        <div className={energy ? '' : 'active'} onClick={setEnergy.bind(null, false)}>
          <Svg id="tint" />
        </div>
        <div className={energy ? 'active' : ''} onClick={setEnergy.bind(null, true)}>
          <Svg id="bolt" />
        </div>
      </div>
    )
  }
}

export default Energy
