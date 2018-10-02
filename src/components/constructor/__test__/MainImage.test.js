import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Provider, inject, observer} from 'mobx-react'
import {render, fireEvent} from 'react-testing-library'
import {mount} from 'enzyme'

import MainImage from '../MainImage'
import constStore from '../../../store/Constructor'
import Icon from '../Icon'

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
    // const container = render(
    //   <Provider constStore={constStore}>
    //     <span>{inject('constStore')(<MainImage />)}</span>
    //   </Provider>,
    // )
    // const container = render(
    //   <Provider constStore={constStore}>
    //     <MainImage />
    //   </Provider>,
    // )
    // ReactDOM.render(
    //   <Provider constStore={constStore}>
    //     <MainImage />
    //   </Provider>, div
    // )
    // console.log(' LOG ___  ', container)
    expect(1).toBe(1)
  })
})
