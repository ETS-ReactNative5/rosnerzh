import {observable, action, computed} from 'mobx'

class Contructour {
  @observable width = 500
  @observable  height = 800
  @observable  minWidth = 400
  @observable  maxWidth = 600
  @observable  minHeight = 500
  @observable  maxHeight = 1200
  @observable  form = 1
  @observable  color = 5
  @observable  energy = false
  @observable  lintels = false
  @observable  gate = false
  @observable  rack = false

  @action('set-width')
  setWidth = value => {
    this.width = value
  }
  @action('set-height')
  setHeight = value => {
    this.height = value
  }
  @action('set-height')
  setColor = value => {
    this.color = value
  }
}

const constructor = new Contructour()

export default constructor
export {Contructour}
