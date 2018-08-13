import React, {Component, Fragment} from 'react'
import {inject, observer} from 'mobx-react'

// Layout component;
@inject('constStore')
@observer
class Layout extends Component {
  render() {
    const {state} = this.props.constStore
    return (
      <Fragment>
        <div className="main-constructor__settings">settings</div>
        <div className="main-constructor__image">img</div>
        <div className="main-constructor__settings">settings</div>
      </Fragment>
    )
  }
}

export default Layout
