import React, {Component, Fragment} from 'react'
import {inject, observer} from 'mobx-react'
import {Motion, spring} from 'react-motion'
import InputRange from 'react-rangeslider'
import './rangeSlider.css'

import IconList from './TypeList'
import Toggler from './Toggler'
import ColorList from './ColorList'
import FormList from './FormList'
import MainImage from './MainImage'
import Energy from './Energy'
import {opacityFastPreset, transformPreset} from '../../settings/conf'
// Layout component;
@inject('constStore')
@observer
class Layout extends Component {
  state = {
    collapsed: null,
  }

  collapseIcons = () =>
    this.setState(({collapsed}) => ({collapsed: collapsed !== 'icon' ? 'icon' : null}))
  collapseForms = () =>
    this.setState(({collapsed}) => ({collapsed: collapsed !== 'form' ? 'form' : null}))

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
          <Toggler caption="Расположение перемычек" isActive={gate} handler={setLintels} />
          <Toggler caption="Наличие полочки" isActive={rack} handler={setRack} />
          <Toggler caption="Разъемы подключения" isActive={lintels} handler={setGate} />
          <Motion
            style={{
              y: spring(gate ? -10 : 0, transformPreset),
              opacity: spring(gate ? 0 : 1, opacityFastPreset),
            }}
          >
            {({y, opacity}) => (
              <div style={{transform: `translateY(${y}px)`, opacity}}>
                <InputRange
                  value={gateLength}
                  min={300}
                  max={600}
                  onChange={setGateLength}
                  step={100}
                  tooltip={false}
                />
                <div className="main-constructor__image--gate-tooltip">
                  {`${gateLength} мм`}
                </div>
              </div>
            )}
          </Motion>
        </div>
        <div className="main-constructor__image">
          <div className="main-constructor__image--wrap">
            <Energy />
            <div className="main-constructor__image--width-tooltip">{`${width} мм`}</div>
            <InputRange
              value={width}
              max={maxWidth}
              min={minWidth}
              onChange={setWidth}
              step={100}
              tooltip={false}
            />
            <MainImage />
            <ColorList />
          </div>
          <div className="main-constructor__image--range">
            <div className="main-constructor__image--height-tooltip">
              {`${height} мм`}
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
        <div className="main-constructor__settings">
          <IconList
            isCollapsed={this.state.collapsed === 'icon'}
            collapse={this.collapseIcons}
          />
          <FormList
            isCollapsed={this.state.collapsed === 'form'}
            collapse={this.collapseForms}
          />
        </div>
      </Fragment>
    )
  }
}

export default Layout
