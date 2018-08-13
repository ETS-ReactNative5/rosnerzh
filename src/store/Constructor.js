import {observable, action, computed} from 'mobx'

class Contructour {
  @observable
  state

  constructor() {
    this.state = 'Test const store'
  }
}

const constructor = new Contructour()

export default constructor
export {Contructour}
