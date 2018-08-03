import React, {Component, Fragment} from 'react'
import Video from './Video'

// Header component;
class Header extends Component {
  videoSrc = {
    full: 'video/header-full.mp4',
    mob: 'video/header-mob.mp4',
  }

  _getVideoSrc = () => this.props.isMobile? this.videoSrc.mob: this.videoSrc.full

  render() {
    return (
      <header>
        <Video src={this._getVideoSrc()} />
        <h1>Полотенцесушитель для вашей ваны</h1>
        <p>Мы поможем найти идеальную сушку для вас</p>
        <p>большой выбор Любой формы, цвета и размера</p>
      </header>
    )
  }
}

export default Header
