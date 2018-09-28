import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import {Parallax} from 'react-scroll-parallax'

import Video from './Video'

/**
* Returns array of chars
* @param str{String}
* @return array of chars{Array}
* @private
*/
const splitByChars = str => str.split('').map(char => (char === ' ' ? '\u00A0' : char))

/**
* Returns title with br
* @param 
* @return {Void}
* @private
*/
const mobTitle = [
  ...splitByChars('Полотенцесушитель'),
  <br key={0}/>,
  ...splitByChars('в вашу ванну'),
]

const title = splitByChars('Полотенцесушитель в вашу ванну')

// Header component; Includes title, video and subtitle
@inject('menuStore')
@observer
class Header extends Component {
  videoSrc = {
    full: 'video/header-full.mp4',
    mob: 'video/header-mob.mp4',
  }

  /**
  * Returns different src of video within mob or desctop screen is
  * @return {Void}
  * @private
  */
  _getVideoSrc = () =>
    this.props.menuStore.isMobile ? this.videoSrc.mob : this.videoSrc.full

  render() {
    const {isMobile} = this.props.menuStore
    return (
      <header>
        <Video src={this._getVideoSrc()} />
        <h1>
          {isMobile
            ? mobTitle
            : title.map((char, i) => (
                <Parallax
                  key={`copy-${i}`}
                  offsetXMax={`${4 * (i - 15)}px`}
                  offsetXMin={`${-4 * (i - 15)}px`}
                  disabled={isMobile}
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
