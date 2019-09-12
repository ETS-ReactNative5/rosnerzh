import React from 'react'
import {withRouter} from 'react-router-dom'
import {Provider} from 'mobx-react'

import {MenuStore} from './Menu'
import {ConstStore} from './Constructor'

// MobxProvider stateless component;
const MobxProvider = data => {
  const {children} = data
  console.log('TCL: data', data)
  const menuStore = new MenuStore()
  const constStore = new ConstStore({test: true})
  return (
    <Provider menuStore={menuStore} constStore={constStore}>
      {children}
    </Provider>
  )
}

export default withRouter(MobxProvider)
