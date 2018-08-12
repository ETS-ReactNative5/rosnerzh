import React, {Component} from 'react'
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types'

import Svg from '../common/Svg'

// Constructor component;
@inject('menuStore')
@observer
class Constructor extends Component {
  static propTypes = {
    toggleMain: PropTypes.func.isRequired,
  }
  render() {
    console.log(" LOG ___ this.props ", this.props.menuStore )
    return (
      <section className="main-constructor">
        <div onClick={this.props.toggleMain} className="main-constructor__arrow-back">
          <Svg id="arrow" />
        </div>
        <div onClick={this.props.toggleMain} className="main-constructor__arrow-back">
          <Svg id="arrow" />
        </div>
      </section>
    )
  }
}

export default Constructor
