import React, {Component} from 'react'
import {inject} from 'mobx-react'
import {Icon, Popover} from 'antd'

import MainImage from './MainImage'
import Formatted from '../common/FormattedDesc'
// PreviewContent component;
@inject('constStore')
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
    }, 8000)
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
        {!!this.props.constStore.settings.length && (
          <Popover placement="top" content="Характеристики">
            <Icon
              onClick={() => this.setState({show: 'settings'})}
              type="line-chart"
              theme="outlined"
            />
          </Popover>
        )}
        {!!this.props.constStore.workDescription.length && (
          <Popover placement="top" content="Рабочие свойства">
            <Icon
              onClick={() => this.setState({show: 'workDescription'})}
              type="area-chart"
              theme="outlined"
            />
          </Popover>
        )}
        {!!this.props.constStore.description.length && (
          <Popover placement="top" content="Описание">
            <Icon
              onClick={() => this.setState({show: 'description'})}
              type="bars"
              theme="outlined"
            />
          </Popover>
        )}
        {!!this.props.constStore.properties.length && (
          <Popover placement="top" content="Комплектующие">
            <Icon
              onClick={() => this.setState({show: 'properties'})}
              type="setting"
              theme="outlined"
            />
          </Popover>
        )}
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
    const {constStore: store} = this.props
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
          <Formatted content={store.settings} />
        </p>
        <p
          className="main-constructor__image--desc"
          style={{
            transform: `translateY(${this.state.show === 'description' ? '0' : '700px'})`,
          }}
        >
          {store.description}
        </p>
        <p
          className="main-constructor__image--desc"
          style={{
            transform: `translateY(${
              this.state.show === 'workDescription' ? '0' : '700px'
            })`,
          }}
        >
          {store.workDescription.map(row => (
            <p>{row}</p>
          ))}
        </p>
        <p
          className="main-constructor__image--desc"
          style={{
            transform: `translateY(${this.state.show === 'properties' ? '0' : '700px'})`,
          }}
        >
          <Formatted content={store.properties} />
        </p>
        {this._getIcons()}
      </div>
    )
  }
}

export default PreviewContent
