import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Svg from '../common/Svg'
// Toggler component;
class Toggler extends Component {
  static propTypes = {
    handler: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
    caption: PropTypes.string.isRequired,
  }

  render() {
    const {isActive, handler, caption} = this.props
    return (
      <figure
        className={'main-constructor__settings--wrap' + (isActive ? ' active' : '')}
        onClick={handler}
      >
        <Svg id="towelDryer" />
        <figcaption>
          {caption}
        </figcaption>
      </figure>
    )
  }
}

export default Toggler
