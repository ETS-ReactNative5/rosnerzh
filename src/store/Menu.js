import {observable, action, computed} from 'mobx'
import {isMobile} from 'react-device-detect'

class MenuStore {
  @observable state // close | constructor | main | order
  @observable isMobile = true

  constructor() {
    this.state = 'close'
    // this.isMobile = isMobile
  }
  @action('toggle-state')
  toggleMenu = () => {
    this.state = this.state === 'close' ? 'main' : 'close'
  }
  @action('open-construcotr')
  openConstructor = () => {
    this.state = 'constructor'
  }
  @action('close-menu')
  closeMenu = () => {
    this.state = 'close'
  }
  @action('open-main')
  openMain = () => {
    this.state = 'main'
  }
  @action('open-thank-you')
  openTY = () => {
    this.state = 'thank-you'
  }
  @action('open-call-back')
  openCallback = () => {
    this.state = this.state === 'callback' ? 'main' : 'callback'
  }

  @action('open-order')
  openOrder = () => {
    this.state = 'order'
  }

  @action('open-chain')
  openChain = chain => {
    this.state = chain[0]
    setTimeout(() => {
      this.state = chain[1]
    }, 900)
    setTimeout(() => {
      this.state = chain[2]
    }, 1550)
  }

  @computed
  get isOpen() {
    return this.state !== 'close' ? true : false
  }
}

const menuStore = new MenuStore()

export default menuStore
export {MenuStore}
