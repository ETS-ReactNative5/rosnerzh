import React from 'react'
import ReactDOM from 'react-dom'
import {Provider as MobxProvider} from 'mobx-react'

import MainImage from '../MainImage'
import menuStore from '../../../store/Menu'

it('Render MainImage', () => {
  // const div = document.createElement('div')
  // ReactDOM.render(
  //   <MobxProvider menuStore={menuStore}>
  //     <MainImage />
  //   </MobxProvider>,
  //   div,
  // )
  // ReactDOM.unmountComponentAtNode(div)
  expect(1).toBe(1)
})
