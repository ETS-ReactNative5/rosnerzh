import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Svg from './Svg'

// Button component;
class Button extends Component {
  static propTypes = {
    caption: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  }

  render() {
    const {onClick = () => {}, caption} = this.props
    return (
      <button className="rz_btn" onClick={onClick}>
        <span className="wrapper">
          <span>{caption}</span>
          <Svg id="arrowRight" />
        </span>
      </button>
    )
  }
}

export default Button
