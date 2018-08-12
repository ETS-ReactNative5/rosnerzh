import {observable, action} from 'mobx'

class MenuStore {
  @observable
  menu

  constructor() {
    this.menu = 'close'
  }
  @action
  toggleMenu() {
    this.menu = this.menu === 'close' ? 'main' : 'close'
  }
}

const menuStore = new MenuStore()

export default menuStore
export {MenuStore}
