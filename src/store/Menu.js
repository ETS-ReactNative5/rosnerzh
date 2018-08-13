import {observable, action, computed} from 'mobx'

class MenuStore {
  @observable
  state

  constructor() {
    this.state = 'close'
  }

  @action('toggle-state')
  toggleMenu = () => {
    this.state = this.state === 'close' ? 'main' : 'close'
  }

  @action('open-construcotr')
  openConstructor = () => {
    this.state = 'constructor'
  }

  @action('open-main')
  openMain = () => {
    this.state = 'main'
  }

  @action('open-order')
  openOrder = () => {
    this.state = 'order'
  }
  @computed
  get isOpen() {
    return this.state !== 'close' ? true : false
  }
}

const menuStore = new MenuStore()

export default menuStore
export {MenuStore}
