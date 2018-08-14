import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import PropTypes from 'prop-types'

// Color component;
@inject('constStore')
@observer
class Color extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }

  render() {
    const {id, constStore} = this.props
    const {color, setColor} = constStore
    return (
      <div
        className={`main-constructor__color${color === id ? ' active' : ''}`}
        style={{background: this.props.color}}
        onClick={setColor.bind(null, id)}
      />
    )
  }
}

export default Color
