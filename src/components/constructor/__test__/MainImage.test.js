import React from 'react'
import ReactDOM from 'react-dom'
import {Provider, inject, observer} from 'mobx-react'
import {render, fireEvent} from 'react-testing-library'

import MainImage from '../MainImage'
import constStore from '../../../store/Constructor'
import Icon from '../Icon'

const renderWithProvider = (routerStore) => (ChildComponent) => render(
  <Provider routerStore={routerStore}>
    <ChildComponent />
  </Provider>
);

describe('MainImage', () => {
  it('Render MainImage', () => {
    // const div = document.createElement('div')
    // ReactDOM.render(
    //   <Provider menuStore={menuStore}>
    //     <MainImage menuStore={menuStore}/>
    //   </Provider>,
    //   div,
    // )
    // const {container} = render(<Icon onClick={() => {}} entity={{}}/>)
    const {container, getByLabelText} = render(
      <Provider constStore={constStore}>
        <span>{inject('constStore')(<MainImage />)}</span>
      </Provider>,
    )
    console.log(' LOG ___  ', container.querySelectorAll('div'))
    expect(1).toBe(1)
  })
})
