import ThankYou from '../ThankYou'
import {render, fireEvent} from 'react-testing-library'
import {withProvider} from '../../common/utils'

import {MenuStore} from '../../../store/Menu'

describe('ThankYou tests', () => {
  const menuStore = new MenuStore
  it('render', () => {
    menuStore.openMain = jest.fn()
    const {getByTestId} = render(withProvider({menuStore})(ThankYou))
    const leftClick = {button: 0}
    const arrow = getByTestId('open-main__arrow')

    // console.log(JSON.stringify(menuStore, null, 2))
    menuStore.openMain()
    fireEvent.click(arrow, leftClick)
    // console.log(JSON.stringify(menuStore, null, 2))
    expect(menuStore.openMain).toHaveBeenCalledTimes(1)
    expect(1).toBe(1)
  })
})
