import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import {Popover} from 'antd'

import Svg from '../common/Svg'

// Energy component;
@inject('constStore')
@observer
class Energy extends Component {
  render() {
    const {energy, setEnergy} = this.props.constStore
    return (
      <div className="main-constructor__energy">
        <Popover placement="right" content="Водянной">
          <div className={energy ? '' : 'active'} onClick={setEnergy.bind(null, false)}>
            <Svg id="tint" />
          </div>
        </Popover>
        <Popover placement="right" content="Электрический">
        <div className={energy ? 'active' : ''} onClick={setEnergy.bind(null, true)}>
          <Svg id="bolt" />
        </div>
        </Popover>
      </div>
    )
  }
}

export default Energy
