import React, {Component, Fragment} from 'react'
import {inject, observer} from 'mobx-react'
import InputRange from 'react-rangeslider'
import './rangeSlider.css'

import Toggler from './Toggler'
import ColorList from './ColorList'
// Layout component;
@inject('constStore')
@observer
class Layout extends Component {
  render() {
    const {
      width,
      height,
      minWidth,
      maxWidth,
      setWidth,
      minHeight,
      maxHeight,
      setHeight,
      setGate,
      setRack,
      setLintels,
      gate,
      rack,
      lintels,
      gateLength,
      setGateLength,
    } = this.props.constStore
    return (
      <Fragment>
        <div className="main-constructor__settings">
          <Toggler isActive={gate} handler={setLintels} />
          <Toggler isActive={rack} handler={setRack} />
          <Toggler isActive={lintels} handler={setGate} />
          {gate && (
            <InputRange
              value={gateLength}
              min={300}
              max={600}
              onChange={setGateLength}
              step={100}
              tooltip={false}
            />
          )}
        </div>
        <div className="main-constructor__image">
          <div className="main-constructor__image--wrap">
            <div className="main-constructor__image--width-tooltip">
              {width}
              мм
            </div>
            <InputRange
              value={width}
              max={maxWidth}
              min={minWidth}
              onChange={setWidth}
              step={100}
              tooltip={false}
            />
            <img
              className="main-constructor__image--preview"
              src="img/main-800-500.jpg"
              alt=""
            />
            <ColorList />
          </div>
          <div className="main-constructor__image--range">
            <div className="main-constructor__image--height-tooltip">
              {height}
              мм
            </div>
            <InputRange
              value={height}
              max={maxHeight}
              min={minHeight}
              onChange={setHeight}
              step={100}
              tooltip={false}
              orientation="vertical"
            />
          </div>
        </div>
        <div className="main-constructor__settings">settings</div>
      </Fragment>
    )
  }
}

export default Layout
