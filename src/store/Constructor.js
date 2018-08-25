import {observable, action, computed} from 'mobx'

class Contructour {
  @observable width = 500
  @observable height = 800
  @observable minWidth = 400
  @observable maxWidth = 600
  @observable minHeight = 500
  @observable maxHeight = 1200
  @observable gateLength = 400
  @observable type = "ladder"       // ladder | mType | pType | fType | gType
  @observable form = 0
  @observable color = 5
  @observable energy = false
  @observable rail = false
  @observable gate = false
  @observable rack = false

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
  @action('set-rail')
  setRail = () => {
    this.rail = !this.rail
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
  @action('set-form')
  setForm = value => {
    this.form = value
  }
  @action('set-energy')
  setEnergy = value => {
    this.energy = value
  }

  @computed
  get imgSrc() {
    if(this.gate) return '/img/main2-800-500.jpg'
    if(!this.gate) return '/img/main-800-500.jpg'
  }
  //TODO: fix currency format, and round +/- 50 units
  @computed
  get price() {
    return 123
  }
}

const constructor = new Contructour()

export default constructor
export {Contructour}

const data = {
  "type"  : {     		    //	Базовые цены на вид сушилки
    "ladder"   : 5350,		//	Лесенка
    "mType"   : 1750,		  //	Буква М
    "pType"   : 1190,		  //	Буква П
    "gType"   : 3190,		  //	Гусли
    "fType"   : 2900},		//	Фокстрот
  "height": {				//	Цены на высоту сушилки
    "300" : 1,			//	300 мм   100%
    "400" : 1,			//	300 мм   100%
    "500" : 1,			//	500 мм   100%
    "600" : 1.07,		//	600 мм   107%
    "700" : 1.14,
    "800" : 1.21,
    "900" : 1.28,
    "1000": 1.35,
    "1100": 1.42,
    "1200": 1.49},
  "width" : {				//	Цены на ширрину сушилки
    "300" : 1,			//	300 мм		100%
    "400" : 1,			//	400 мм		100%
    "500" : 1.07,		//	500 мм		107%
    "600" : 1.14,
    "700" : 1.21,
    "800" : 1.28,
    "900" : 1.35,
    "1000": 1.42,
    "1100": 1.49},
  "form"  : {				//	Цены на форму сушилки
      "0" : 50,		//	волна
      "1" : 550,		//	скоба
      "2" : 2100,		//	аврора
      "3" : 50,		//	дуга
      "4" : 700,		//	зигзаг
      "5" : 2100,		//	NEO 1
      "6" : 0,		//	прямая
      "7" : 50,		//	трапеция
      "8" : 2300},	//	NEO 2
  "base"  : {				//	Цены на тип сушилки
      "1" : 0,		//	Водянной
      "2" : 3100},	//	Электрический
  "jumper": 1.13,			//	Цена на группировку перемычек
  "hook"  : {				//	Цена для варианта подключения
      "1" : 0,		//	Универсальное 
      "2" : 1000},	//	Боковое 110%
  "color" : 4000,			//	Цена за перекраску
  }