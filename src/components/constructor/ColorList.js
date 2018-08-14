import React, {Component} from 'react'

import Color from './Color'
import {colors} from '../../settings/Colors'

// ColorList component;
class ColorList extends Component {
  render() {
    return (
      <section className="main-constructor__colors">
        {colors.map(({color}, i) => (
          <Color key={`color-${i}`} id={i} color={color} />
        ))}
      </section>
    )
  }
}

export default ColorList
