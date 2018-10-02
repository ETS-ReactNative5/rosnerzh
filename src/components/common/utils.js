import React from 'react';
import {Provider} from 'mobx-react'

import menuStore from '../../store/Menu';
import constStore from '../../store/Constructor';
/**
* Serelize obj to form data 
* @param obj{Object}
* @return res{FormData}
* @public
*/
export const serelize = obj => {
  const res = new FormData()
  Object.keys(obj).forEach(key => {
    res.append(key, obj[key])
  })
  return res
}

export const withProvider = store => Child => (
  <Provider {...store} menuStore={menuStore} constStore={constStore}>
    <Child />
  </Provider>
) 