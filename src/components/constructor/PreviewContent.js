import React, {Component} from 'react'
import {Icon, Popover} from 'antd'

import MainImage from './MainImage'

// PreviewContent component;
class PreviewContent extends Component {
  state = {
    show: 'MainImage',
    icons: false,
    isIconsContainerHovered: false,
  }

  _handleLeave = () => {
    this.setState({isIconsContainerHovered: false})
    setTimeout(() => {
      !this.state.isIconsContainerHovered && this.setState({icons: false})
    }, 5000)
  }

  _handleEnter = () => {
    this.setState({isIconsContainerHovered: true})
  }

  _getIcons = () =>
    this.state.icons ? (
      <div
        onMouseEnter={this._handleEnter}
        onMouseLeave={this._handleLeave}
        className="main-constructor__image--icons"
      >
        <Icon
          onClick={() => this.setState({show: 'MainImage', icons: false})}
          type="close"
          theme="outlined"
        />
        <Popover placement="top" content="Характеристики">
          <Icon
            onClick={() => this.setState({show: 'settings'})}
            type="line-chart"
            theme="outlined"
          />
        </Popover>
        <Popover placement="top" content="Описание">
          <Icon
            onClick={() => this.setState({show: 'description'})}
            type="bars"
            theme="outlined"
          />
        </Popover>
        <Popover placement="top" content="Комплектующие">
          <Icon
            onClick={() => this.setState({show: 'properties'})}
            type="setting"
            theme="outlined"
          />
        </Popover>
      </div>
    ) : (
      <div
        className="main-constructor__image--icons"
        onClick={() => this.setState({icons: true})}
      >
        <Icon type="question-circle" theme="outlined" />
      </div>
    )

  render() {
    return (
      <div className="main-constructor__image--container">
        <MainImage
          isPointer={this.state.show !== 'MainImage'}
          onClick={() => this.setState({show: 'MainImage'})}
        />
        <p
          className="main-constructor__image--desc"
          style={{
            transform: `translateY(${this.state.show === 'settings' ? '0' : '700px'})`,
          }}
        >
          some settings
        </p>
        <p
          className="main-constructor__image--desc"
          style={{
            transform: `translateY(${this.state.show === 'description' ? '0' : '700px'})`,
          }}
        >
          some settings
        </p>
        <p
          className="main-constructor__image--desc"
          style={{
            transform: `translateY(${this.state.show === 'properties' ? '0' : '700px'})`,
          }}
        >
          some settings
        </p>
        {this._getIcons()}
      </div>
    )
  }
}

export default PreviewContent