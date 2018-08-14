import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Svg from '../common/Svg'
// Toggler component;
class Toggler extends Component {
  static propTypes = {
    handler: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
  }

  render() {
    const {isActive, handler} = this.props
    return (
      <div className={isActive ? 'active' : ''} onClick={handler}>
        <Svg id="towelDryer" />
      </div>
    )
  }
}

export default Toggler
