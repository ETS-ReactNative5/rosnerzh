import React, {Component} from 'react'
import {inject} from 'mobx-react'
import PropTypes from 'prop-types'

import Svg from './Svg'

// TODO: add link
// Button component;
@inject('menuStore')
class Button extends Component {
  static propTypes = {
    caption: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  }

  render() {
    const {onClick = () => {}, caption} = this.props
    const {isMobile} = this.props.menuStore
    return (
      <button className={`rz_btn${isMobile? ' active':''}`} onClick={onClick}>
        <span className="wrapper">
          <span>{caption}</span>
          <Svg id="arrowRight" />
        </span>
      </button>
    )
  }
}

export default Button
