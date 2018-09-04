import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import axios from 'axios'
import {imageCDN} from '../../settings/conf'

import {noImg} from '../common/noImage'
import Loading from '../common/Loading'
// MainImage component;
@inject('constStore')
@observer
class MainImage extends Component {
  state = {
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
            srcCache: {...this.state.srcCache, [src]: noImg},
          })
        else {
          this._cacheImg({imgPath, imgName: 'main.jpg'})
          this.setState({
            loading: false,
            srcCache: {...this.state.srcCache, [src]: 'no-image'},
          })
        }
        console.error(error.response)
      })
  }

  componentDidMount() {
    const {imgName, imgPath} = this.props.constStore
    this._handleImgChange({imgName, imgPath})
  }

  componentWillReceiveProps({constStore}, {loading}) {
    const {imgName, imgPath} = constStore
    if (!loading) this._handleImgChange({imgName, imgPath})
  }

  _handleImgChange = ({imgName, imgPath}) => {
    if (this.state.srcCache[imgPath + imgName]) return null
    this.setState({loading: true})
    this._cacheImg({imgPath, imgName})
  }

  render() {
    const {srcCache, loading} = this.state
    const {imgName, imgPath} = this.props.constStore
    console.log(' LOG ___ imgSrc ', imgPath, imgName)
    const src =
      imgPath + (srcCache[imgPath + imgName] === 'no-image' ? 'main.jpg' : imgName)
    if (loading)
      return (
        <div className="main-constructor__image--preview">
          <Loading />
        </div>
      )
    return (
      <figure
        onClick={this.props.onClick}
        style={{
          backgroundImage: `url(${srcCache[src]})`,
          cursor: `${this.props.isPointer ? 'pointer' : 'default'}`,
        }}
        className="main-constructor__image--preview"
      />
    )
  }
}

export default MainImage
