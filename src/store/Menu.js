import {observable, action, computed} from 'mobx'
import {isMobile} from 'react-device-detect'

// menu state
class MenuStore {
  @observable state // close | constructor | main | order
  @observable isMobile = true

  constructor() {
    this.state = 'close'
    this.isMobile = isMobile
  }
  // triggers opening or closing menu
  @action('toggle-state')
  toggleMenu = () => {
    this.state = this.state === 'close' ? 'main' : 'close'
  }
  // open consturctor 
  @action('open-constructor')
  openConstructor = () => {
    this.state = 'constructor'
  }
  // close menu
  @action('close-menu')
  closeMenu = () => {
    this.state = 'close'
  }
  // open nav menu
  @action('open-main')
  openMain = () => {
    this.state = 'main'
  }
  // open ty menu
  @action('open-thank-you')
  openTY = () => {
    this.state = 'thank-you'
  }
  // open callback menu
  @action('open-call-back')
  openCallback = () => {
    this.state = this.state === 'callback' ? 'main' : 'callback'
  }
  // open order menu
  @action('open-order')
  openOrder = () => {
    this.state = 'order'
  }
  // open chaned stages with delay
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

  // returns true when menu is opened
  @computed
  get isOpen() {
    return this.state !== 'close' ? true : false
  }
}

const menuStore = new MenuStore()

export default menuStore
export {MenuStore}
