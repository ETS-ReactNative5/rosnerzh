import React from 'react'
import ReactDOM from 'react-dom'
import Icon from '../Icon'

it('Render Icon', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Icon onClick={() => {}} entity={{}} />, div)
  ReactDOM.unmountComponentAtNode(div)
  expect(1).toBe(1)
})
