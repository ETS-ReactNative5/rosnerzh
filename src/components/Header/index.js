import React, {Component} from 'react'
import {Parallax} from 'react-scroll-parallax'

import Video from './Video'

const title = 'Полотенцесушитель в вашу ванну'
  .split('')
  .map(char => (char === ' ' ? '\u00A0' : char))

// Header component;
class Header extends Component {
  videoSrc = {
    full: 'video/header-full.mp4',
    mob: 'video/header-mob.mp4',
  }

  _getVideoSrc = () => (this.props.isMobile ? this.videoSrc.mob : this.videoSrc.full)

  render() {
    return (
      <header>
        <Video src={this._getVideoSrc()} />
        <h1>
          {title.map((char, i) => (
            <Parallax
              key={`copy-${i}`}
              offsetXMax={`${4 * (i - 15)}px`}
              offsetXMin={`${-4 * (i - 15)}px`}
            >
              {char}
            </Parallax>
          ))}
        </h1>
        <p>Мы поможем найти идеальную сушку для вас</p>
        <p>большой выбор Любой формы, цвета и размера</p>
      </header>
    )
  }
}

export default Header
