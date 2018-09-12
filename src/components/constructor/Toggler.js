import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Svg from '../common/Svg'
// Toggler component;
class Toggler extends Component {
  static propTypes = {
    handler: PropTypes.func.isRequired,
    svgId: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
  }

  render() {
    const {svgId, handler, caption, disabled, children = null} = this.props
    return (
      <figure
        className="main-constructor__settings--wrap"
        onClick={disabled? ()=>{}: handler}
        disabled={disabled}
      >
        <Svg id={svgId} disabled={disabled} />
        <figcaption>{caption}</figcaption>
        {children}
      </figure>
    )
  }
}

export default Toggler
