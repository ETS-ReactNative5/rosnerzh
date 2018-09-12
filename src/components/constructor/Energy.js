import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import {Popover} from 'antd'
import PropTypes from 'prop-types'

import Svg from '../common/Svg'

// Energy component;
@inject('constStore')
@observer
class Energy extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  }
  render() {
    const {energy, setEnergy, width} = this.props.constStore
    return (
      <div className="main-constructor__energy">
        <Popover placement="right" content="Водянной">
          <div
            className={energy ? '' : 'active'}
            onClick={() => {
              setEnergy(false)
              this.props.onClick()
            }}
          >
            <Svg id="tint" />
          </div>
        </Popover>
        <div className="main-constructor__image--width-tooltip">{`${width} мм`}</div>
        <Popover placement="right" content="Электрический">
          <div
            className={energy ? 'active' : ''}
            onClick={() => {
              setEnergy(true)
              this.props.onClick()
            }}
          >
            <Svg id="bolt" />
          </div>
        </Popover>
      </div>
    )
  }
}

export default Energy
