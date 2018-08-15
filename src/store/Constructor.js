import {observable, action, computed} from 'mobx'

class Contructour {
  @observable width = 500
  @observable  height = 800
  @observable  minWidth = 400
  @observable  maxWidth = 600
  @observable  minHeight = 500
  @observable  maxHeight = 1200
  @observable  gateLength = 400
  @observable  type = "ladder"       // ladder | mType | pType | fType
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
  @action('set-gate-length')
  setGateLength = value => {
    this.gateLength = value
  }
  @action('set-color')
  setColor = value => {
    if(value === this.color) return this.color = 5
    this.color = value
  }
  @action('set-lintels')
  setLintels = () => {
    this.lintels = !this.lintels
  }
  @action('set-gate')
  setGate = () => {
    this.gate = !this.gate
  }
  @action('set-rack')
  setRack = () => {
    this.rack = !this.rack
  }
  @action('set-type')
  setType = value => {
    this.type = value
  }
}

const constructor = new Contructour()

export default constructor
export {Contructour}
