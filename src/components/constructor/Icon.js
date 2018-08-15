import React, {Component} from 'react'
import PropTypes from 'prop-types'

// style={{
//   x: spring(130, helperConfig),
// }}

import Svg from '../common/Svg'
// Icon component;
class Icon extends Component {
  static propTypes = {
    style: PropTypes.object,
    onClick: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div
        style={this.props.style}
        onClick={this.props.onClick}
        className="main-constructor__settings--icon"
      >
        <Svg id={this.props.id} />
      </div>
    )
  }
}

export default Icon
