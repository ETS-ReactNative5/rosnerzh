import Price from '../Price'
import {render, fireEvent} from 'react-testing-library'
import {withProvider} from '../../common/utils'

import {ConstStore} from '../../../store/Constructor'

describe('Price tests', () => {
  let constStore
  beforeEach(() => {
    constStore = new ConstStore()
  })

  it('render', async () => {
    const {getByTestId} = render(withProvider({constStore})(Price))
    const price = getByTestId('price')
    // console.log('store', JSON.stringify(constStore, null, 2))
    // console.log('price', constStore.price)
    // console.log(price.querySelector('span').innerHTML)
    expect(price.querySelector('span').innerHTML).toContain(constStore.price)
  })

  it('mobx @computed', () => {
    expect(constStore.testMobx).toBe(1)
  })
})
