import React from 'react'
import {withRouter} from 'react-router-dom'
import {Provider} from 'mobx-react'

import {MenuStore} from './Menu'
import {ConstStore} from './Constructor'

// MobxProvider stateless component;
const MobxProvider = ({children, match}) => {
  const token = match && match.params && match.params.token || null
  const menuStore = new MenuStore(token)
  const constStore = new ConstStore(token)
  return (
    <Provider menuStore={menuStore} constStore={constStore}>
      {children}
    </Provider>
  )
}

export default withRouter(MobxProvider)
