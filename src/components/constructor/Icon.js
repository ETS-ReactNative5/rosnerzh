import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Svg from '../common/Svg'
// Icon component;
class Icon extends Component {
  static propTypes = {
    style: PropTypes.object,
    onClick: PropTypes.func.isRequired,
    entity: PropTypes.object.isRequired,
  }

  render() {
    const {style, onClick, entity, className = ''} = this.props
    return (
      <div style={{...style}} onClick={onClick} className={`main-constructor__settings--icon ${className}`}>
        <Svg id={entity.id} />
        <figcaption>{entity.figcaption}</figcaption>
      </div>
    )
  }
}

export default Icon
