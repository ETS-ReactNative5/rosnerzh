import React from 'react'
import {withRouter} from 'react-router-dom'
import {Provider} from 'mobx-react'

import {MenuStore} from './Menu'
import {ConstStore} from './Constructor'

// MobxProvider stateless component;
const MobxProvider = ({children, match, history}) => {
  const menuStore = new MenuStore()
  const constStore = new ConstStore(match.params.token, history.push)
  return (
    <Provider menuStore={menuStore} constStore={constStore}>
      {children}
    </Provider>
  )
}

export default withRouter(MobxProvider)
