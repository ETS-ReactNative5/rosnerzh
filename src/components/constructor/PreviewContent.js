import React, {Component} from 'react'
import {inject} from 'mobx-react'
import {Icon, Popover} from 'antd'
import axios from 'axios'

import {imageCDN} from '../../settings/conf'
import MainImage from './MainImage'
import Formatted from '../common/FormattedDesc'
import Loading from '../common/Loading'
// PreviewContent component;
@inject('constStore')
class PreviewContent extends Component {
  state = {
    show: 'MainImage',
    icons: false,
    isIconsContainerHovered: false,
    srcCache: {}, //{'/img/main2-800-500.jpg':'data:image/png;base64,...', ...}
    loading: true,
  }

  _cacheImg = ({imgPath, imgName}) => {
    const src = imgPath + imgName
    axios
      .get(`${imageCDN}${src}`, {
        responseType: 'arraybuffer',
      })
      .then(({data}) => {
        const res = new Buffer(data, 'binary').toString('base64')
        this.setState({
          loading: false,
          srcCache: {...this.state.srcCache, [src]: 'data:image/png;base64,' + res},
        })
      })
      .catch(error => {
        if (imgName === 'main.jpg')
          this.setState({
            loading: false,
            srcCache: {...this.state.srcCache, [src]: 'no-image'},
          })
        else {
          this._cacheImg({imgPath, imgName: 'main.jpg'})
          this.setState({
            loading: false,
            srcCache: {...this.state.srcCache, [src]: 'no-image'},
          })
        }
      })
  }

  _handleImgChange = ({imgName, imgPath}) => {
    if (this.state.srcCache[imgPath + imgName]) return null
    this.setState({loading: true})
    this._cacheImg({imgPath, imgName})
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
        {this.state.srcCache[
          this.props.constStore.imgPath + this.props.constStore.imgSchema
        ] !== 'no-image' ? (
          <Popover placement="top" content="Чертеж">
            <Icon
              onClick={() => this.setState({show: 'schema'})}
              type="form"
              theme="outlined"
            />
          </Popover>
        ) : null}
      </div>
    ) : (
      <div
        className="main-constructor__image--icons"
        onClick={() => this.setState({icons: true})}
      >
        <Icon type="question-circle" theme="outlined" />
      </div>
    )

  componentDidMount() {
    const {imgSchema, imgPath} = this.props.constStore
    this._handleImgChange({imgName: imgSchema, imgPath})
  }

  componentWillReceiveProps({constStore}, {loading, show}) {
    const {imgSchema, imgPath} = constStore
    if (show !== 'MainImage') this.setState({show: 'MainImage'})
    if (!loading) this._handleImgChange({imgName: imgSchema, imgPath})
  }

  render() {
    const {constStore: store} = this.props
    const {imgSchema, imgPath} = store
    const src =
      this.state.srcCache[imgPath + imgSchema] === 'no-image' ? null : imgPath + imgSchema
    return (
      <div className="main-constructor__image--container">
        <MainImage
          isPointer={this.state.show !== 'MainImage'}
          onClick={() => this.setState({show: 'MainImage'})}
        />
        <article
          onClick={() => this.setState({icons: false})}
          className="main-constructor__image--desc"
          style={{
            transform: `translateY(${this.state.show === 'settings' ? '0' : '700px'})`,
          }}
        >
          <Formatted content={store.settings} />
        </article>
        <article
          onClick={() => this.setState({icons: false})}
          className="main-constructor__image--desc"
          style={{
            transform: `translateY(${this.state.show === 'description' ? '0' : '700px'})`,
          }}
        >
          {store.description}
        </article>
        <article
          onClick={() => this.setState({icons: false})}
          className="main-constructor__image--desc"
          style={{
            transform: `translateY(${
              this.state.show === 'workDescription' ? '0' : '700px'
            })`,
          }}
        >
          {store.workDescription.map(row => (
            <div>{row}</div>
          ))}
        </article>
        <article
          onClick={() => this.setState({icons: false})}
          className="main-constructor__image--desc"
          style={{
            transform: `translateY(${this.state.show === 'properties' ? '0' : '700px'})`,
          }}
        >
          <Formatted content={store.properties} />
        </article>
        <article
          onClick={() => this.setState({icons: false})}
          className="main-constructor__image--desc"
          style={{
            transform: `translateY(${this.state.show === 'schema' ? '0' : '700px'})`,
          }}
        >
          {src ? (
            this.state.loading ? (
              <Loading />
            ) : (
              <img className="preview--schema" src={this.state.srcCache[src]} alt="Чертеж полотенцесушителя"/>
            )
          ) : null}
        </article>
        {this._getIcons()}
      </div>
    )
  }
}

export default PreviewContent
