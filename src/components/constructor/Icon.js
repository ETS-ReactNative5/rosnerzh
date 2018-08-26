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
    entity: PropTypes.object.isRequired,
  }

  render() {
    const {style, onClick, entity} = this.props
    return (
      <div style={style} onClick={onClick} className="main-constructor__settings--icon">
        <Svg id={entity.id} />
        <figcaption>{entity.figcaption}</figcaption>
      </div>
    )
  }
}

export default Icon
