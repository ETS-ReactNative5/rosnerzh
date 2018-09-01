import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import {Motion, spring} from 'react-motion'
import InputRange from 'react-rangeslider'
import {Popover} from 'antd'
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
      type,
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
      setRail,
      gate,
      rack,
      rail,
      energy,
      gateLength,
      setGateLength,
    } = this.props.constStore
    console.log(' configuration __ ', this.props.constStore.title)
    return (
      <div className="main-constructor__wrap">
        <div className="main-constructor__settings">
          <Toggler
            caption="Расположение перемычек"
            svgId={rail ? 'ladderGrouped' : 'ladder'}
            handler={setRail}
            disabled={type !== 'ladder'}
          />
          <Toggler
            caption="Наличие полочки"
            svgId={rack ? 'ladderRack' : 'ladderNoRack'}
            handler={setRack}
          />
          <Toggler
            caption="Разъемы подключения"
            svgId={gate ? 'ladderGate' : 'ladder'}
            handler={setGate}
            disabled={energy || type !== 'ladder'}
          />
          <Motion
            style={{
              y: spring(!gate ? -10 : 0, transformPreset),
              opacity: spring(!gate ? 0 : 1, opacityFastPreset),
            }}
          >
            {({y, opacity}) => (
              <Popover visible={gate} placement="bottom" content="Длина разъема">
                <div
                  className="main-constructor__gate-input"
                  style={{transform: `translateY(${y}px)`, opacity}}
                >
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
              </Popover>
            )}
          </Motion>
        </div>
        <div className="main-constructor__image">
          <div className="main-constructor__image--wrap">
            <Energy />
            <Popover placement="rightBottom" content="Ширина">
              <div>
                <div className="main-constructor__image--width-tooltip">{`${width} мм`}</div>
                <InputRange
                  value={width}
                  max={maxWidth}
                  min={minWidth}
                  onChange={setWidth}
                  step={100}
                  tooltip={false}
                />
              </div>
            </Popover>
            <MainImage />
            <ColorList />
          </div>
          <Popover placement="rightTop" content="Высота">
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
          </Popover>
        </div>
        <div className="main-constructor__settings">
          <IconList
            isCollapsed={this.state.collapsed === 'icon'}
            collapse={this.collapseIcons}
            disabled={energy}
          />
          <FormList
            isCollapsed={this.state.collapsed === 'form'}
            collapse={this.collapseForms}
            disabled={type !== 'ladder'}
          />
        </div>
      </div>
    )
  }
}

export default Layout
