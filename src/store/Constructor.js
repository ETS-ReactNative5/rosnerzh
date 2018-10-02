import {observable, action, computed} from 'mobx'
import {desc as fallbackDesk} from './DescriptionData';
import axios from 'axios';

import {api_limits, api_data, api_desc} from '../settings/conf';

class ConstStore {

  @observable width
  @observable height
  @observable minWidth // mType: 400, pType: 400, fType: 400,gType: , ladder: 400
  @observable maxWidth // mType: 800, pType: 700, fType: 600,gType: , ladder: 600
  @observable minHeight // mType: 500, pType: 400, fType: 500,gType: , ladder: 500
  @observable maxHeight // mType: 600, pType: 600, fType: 1200,gType: , ladder: 1200
  @observable gateLength
  @observable type // ladder | mType | pType | fType | gType
  @observable form  // form type: 0, 1, 2, 3, 4 ...
  @observable color  // color: 0, 1, 2, 3, 4 ... (watch more in settings/conf.js)
  @observable energy  // is electro power included
  @observable rail  // is grouping rails 
  @observable gate  // is side connection
  @observable rack  // is rack available
  @observable data  // pricing data from the backend or fallback
  @observable limits  // limits data from the backend or fallback
  @observable desc  // descriptions data from the backend or fallback

  constructor() {
    this.width = 500
    this.height = 800
    this.minWidth = 400
    this.maxWidth = 600 
    this.minHeight = 500 
    this.maxHeight = 1200 
    this.gateLength = 400
    this.type = 'ladder' 
    this.form = 0 
    this.color = 0 
    this.energy = false
    this.rail = false
    this.gate = false
    this.rack = false
    this.data = null
    this.limits = null
    this.desc = null 
  }

  // Set the custom widht, if width equals 300 change it into 320
  @action('set-width')
  setWidth = value => {
    this.width = value === 300? 320: value
  }
  //Set the custom height
  @action('set-height')
  setHeight = value => {
    this.height = value
  }
  // Set the length of the pipe that is responsible for teh connection
  @action('set-gate-length')
  setGateLength = value => {
    this.gateLength = value
  }
  // Set the custom color
  @action('set-color')
  setColor = value => {
    if (value === this.color) return (this.color = 0)
    this.color = value
  }
  // Set grouping rails or not
  @action('set-rail')
  setRail = () => {
    this.rail = !this.rail
  }
  // Set custom side connections or not
  @action('set-gate')
  setGate = () => {
    this.gate = !this.gate
  }
  // Set is available rack
  @action('set-rack')
  setRack = () => {
    this.rack = !this.rack
  }
  // fetching all data from the backend
  @action('fetch')
  fetch = () => {
    if(!this.limits) this.fetchLimits()
    if(!this.data) this.fetchData()
    if(!this.desc) this.fetchDesc()
    }
  // fetch widht and height limits from the backend
  @action('fetch-limits')
  fetchLimits = async () =>
    await axios.get(api_limits)
      .then(({data}) => this.limits = data)
  // fetch pricing data from the backend
  @action('fetch-data')
  fetchData = async () =>
    await axios.get(api_data)
      .then(({data}) => this.data = data)
  // fetch description data from the backend
  @action('fetch-desc')
  fetchDesc = async () =>
    await axios.get(api_desc)
      .then(({data}) => this.desc = data)
  
  // set type of dryer
  //    change limit sizes
  //    fix the current width and height with available limits
  //    fix the additional options with available type
  @action('set-type')
  setType = value => {
    const limits = this.limits || fallbackLimits
    this.maxWidth = limits[value].width.max
    this.minWidth = limits[value].width.min
    this.maxHeight = limits[value].height.max
    this.minHeight = limits[value].height.min

    this.width = Math.max(this.minWidth, Math.min(this.maxWidth, this.width))
    this.height = Math.max(this.minHeight, Math.min(this.maxHeight, this.height))

    if(value !== 'ladder') {
      this.rail = false
      this.gate = false
      this.form = 0
    }
    this.type = value
    // if type icons is stil not disappeared, you can clickem, 
    // and set unavaiable type with that energy type
    if(this.energy) this.type = 'ladder'
  }
  // Set the form
  @action('set-form')
  setForm = value => {
    this.form = value
  }
  // Set energy type, and change the dryer type available options
  @action('set-energy')
  setEnergy = value => {
    this.gate = false
    this.type = 'ladder'
    this.energy = value
  }

  // returns img path
  // format 'ladder/0/001/'
  @computed
  get imgPath() {
    return `${this.type}/${this.form}/${+this.rack}${+this.rail}${+!this.energy && this.gate + 1}/`
  }
  // returns the image name, with width and height, if neccessary
  // format 'main-500-300.jpg'
  @computed
  get imgName() {
    let name = 'main'
    if(this.type === 'ladder') {
      const height = this.height === 1100? 1200: this.height === 900? 1000: this.height
      name = `main-${height}-400`
    }
    if(~['mType', 'pType', 'gType'].indexOf(this.type)) {
      const width = this.width === 800? 700: this.width === 320? 300: this.width
      name = `main-500-${width}`
    }
    return name + '.jpg'
  }
  // returns the image schema, with width and height, if neccessary
  // format 'schema/500-300.jpg'
  @computed
  get imgSchema() {
    return `schema/${this.height}-${this.width}.jpg`
  }
  // return title
  @computed
  get title() {
    let res = `${this.width}x${this.height} ${this.type} ${this.form} ${this.energy}`
    if (this.rail) res += ' rail'
    if (this.gate) res += ' gate'
    if (this.rack) res += ' rack'
    return `${res} ${this.color}`
  }
  // returns price
  @computed
  get price() {
    const data = this.data || fallbackData
    let price = data.type[this.type]
    price *= data.rail[+this.rail]
    price *= data.width[+this.width]
    price *= data.height[+this.height]
    if (this.rack) price * 0.2 < 300 ? (price += 300) : (price *= 1.2)
    price += data.form[this.form]
    price += data.energy[+this.energy]
    price += data.gate[+this.gate]
    if (this.color) price += data.color

    const formatter = new Intl.NumberFormat('ru', 'currency')
    return formatter.format(Math.round(price / 50) * 50)
  }
  // returns settings descriptions
  @computed
  get settings() {
    const desc = this.desc || fallbackDesk
    if(this.energy) return desc.energy.settings
    return desc[this.type].settings
  }
  // returns descriptions
  @computed
  get description() {
    const desc = this.desc || fallbackDesk
    if(this.energy) return desc.energy.description
    return  desc[this.type].description
  }
  // returns work desc descriptions
  @computed
  get workDescription() {
    const desc = this.desc || fallbackDesk
    if(this.energy) return desc.energy.workDescription
    return  desc[this.type].workDescription
  }
  // returns properties descriptions
  @computed
  get properties() {
    const desc = this.desc || fallbackDesk
    if(this.energy) return desc.energy.properties
    return  desc[this.type].properties
  }
  // returns data
  @computed
  get getData() {
    const {width, height, type, form, color, energy, rail, rack, price, gate } = this
    return  {width, height, type, form, color, energy, rail, rack, price, gate }
  }
  @computed
  get testMobx() {
    return 1
  }
}

const constStore = new ConstStore()

export default constStore
export {ConstStore}

/**
* 
* F A L L B A C K S
*
*/

const fallbackLimits = {
  mType: {
    width: {
      min: 400,
      max: 800,
    },
    height: {
      min: 500,
      max: 600,
    },
  },
  pType: {
    width: {
      min: 300,
      max: 700,
    },
    height: {
      min: 400,
      max: 600,
    },
  },
  fType: {
    width: {
      min: 400,
      max: 800,
    },
    height: {
      min: 500,
      max: 600,
    },
  },
  gType: {
    width: {
      min: 400,
      max: 800,
    },
    height: {
      min: 300,
      max: 300,
    },
  },
  ladder: {
    width: {
      min: 400,
      max: 600,
    },
    height: {
      min: 500,
      max: 1200,
    },
  },
}

const fallbackData = {
  type: {
    ladder: 5350, //	Лесенка
    mType: 1750, //	Буква М
    pType: 1190, //	Буква П
    gType: 3190, //	Гусли
    fType: 2900,
  }, //	Фокстрот
  height: {
    '300': 1, //	300 мм   100%
    '400': 1, //	300 мм   100%
    '500': 1, //	500 мм   100%
    '600': 1.07, //	600 мм   107%
    '700': 1.14,
    '800': 1.21,
    '900': 1.28,
    '1000': 1.35,
    '1100': 1.42,
    '1200': 1.49,
  },
  width: {
    '300': 1, //	300 мм		100%
    '320': 1, //	300 мм		100%
    '400': 1, //	400 мм		100%
    '500': 1.07, //	500 мм		107%
    '600': 1.14,
    '700': 1.21,
    '800': 1.28,
    '900': 1.35,
    '1000': 1.42,
    '1100': 1.49,
  },
  form: {
    '0': 50, //	волна
    '1': 550, //	скоба
    '2': 2100, //	аврора
    '3': 50, //	дуга
    '4': 700, //	зигзаг
    '5': 2100, //	NEO 1
    '6': 0, //	прямая
    '7': 50, //	трапеция
    '8': 2300,
    '9': 2300,//  laguna
    '10': 2300,// neo_priamaya
    '11': 2300,// neo_duga
    '12': 2300,// neo_modern
    '13': 2300,// skoba_priamaya
    '14': 2300,// trapecia_priamaya
  }, //	NEO 2
  energy: {
    '0': 0, //	Водянной
    '1': 3100,
  }, //	Электрический
  rail: {
    '0': 1,
    '1': 1.13,
  }, //	Цена на группировку перемычек
  gate: {
    '0': 0, //	Универсальное
    '1': 1000,
  }, //	Боковое 110%
  color: 4000, //	Цена за перекраску
}