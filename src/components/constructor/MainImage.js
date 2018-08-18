import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import axios from 'axios'
import {imageCDN} from '../../settings/conf'

import Loading from '../common/Loading'
// MainImage component;
@inject('constStore')
@observer
class MainImage extends Component {
  state = {
    srcCache: {}, //{'/img/main2-800-500.jpg':'data:image/png;base64,...', ...}
    loading: true,
  }

  _cacheImg = src => {
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
  }

  _handleImgChange = src => {
    console.log(' LOG ___ this.state ', src)
    if (this.state.srcCache[src]) return null
    this.setState({loading: true})
    this._cacheImg(src)
  }

  componentDidMount() {
    this._handleImgChange(this.props.constStore.imgSrc)
  }

  componentWillReceiveProps({constStore}, {loading}) {
    if (!loading) this._handleImgChange(constStore.imgSrc)
  }

  render() {
    const {srcCache, loading} = this.state
    const {constStore} = this.props
    if (loading)
      return (
        <div className="main-constructor__image--preview">
          <Loading />
        </div>
      )
    return (
      <img
        className="main-constructor__image--preview"
        src={srcCache[constStore.imgSrc]}
        alt=""
      />
    )
  }
}

export default MainImage
