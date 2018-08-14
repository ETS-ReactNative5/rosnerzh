import React, {Component, Fragment} from 'react'
import {inject, observer} from 'mobx-react'
import InputRange from 'react-rangeslider'
import './rangeSlider.css'

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
    } = this.props.constStore
    return (
      <Fragment>
        <div className="main-constructor__settings">settings</div>
        <div className="main-constructor__image">
          <div className="main-constructor__image--wrap">
            <div className="main-constructor__image--width-tooltip">{width}мм</div>
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
          </div>
          <div className="main-constructor__image--range">
            <div className="main-constructor__image--height-tooltip">{height}мм</div>
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
          <ColorList />
        </div>
        <div className="main-constructor__settings">settings</div>
      </Fragment>
    )
  }
}

export default Layout
