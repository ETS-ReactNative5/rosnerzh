import {ConstStore} from '../Constructor'

describe('Menu store tests', () => {
  let store
  beforeEach(() => {
    store = new ConstStore()
    // console.log(JSON.stringify(store, null, 2))
  })

  it('jest', () => {
    expect(1 + 1).toBe(2)
  })

  it('init store', () => {
    expect(store.width).toBe(500)
    expect(store.height).toBe(800)
  })

  it('size behavior', () => {
    store.setWidth(600)
    expect(store.width).toBe(600)
    store.setWidth(900)
    expect(store.width).toBe(store.maxWidth)
    store.setHeight(1200)
    expect(store.height).toBe(1200)
    store.setHeight(300)
    expect(store.height).toBe(store.minHeight)
    store.minWidth = 200
    store.setWidth(300)
    expect(store.width).toBe(320)
  })

  it('Set type limits', () => {
    store.setType('ladder')
    expect(store.maxWidth).toBe(600)
    expect(store.minWidth).toBe(400)
    expect(store.maxHeight).toBe(1200)
    expect(store.minHeight).toBe(500)
    store.setType('fType')
    expect(store.maxWidth).toBe(800)
    expect(store.minWidth).toBe(400)
    expect(store.maxHeight).toBe(600)
    expect(store.minHeight).toBe(500)
    store.setWidth(800)
    store.setType('ladder')
    expect(store.width).toBe(600)
    store.setHeight(1200)
    store.setType('fType')
    expect(store.height).toBe(600)
  })

  it('Set type shouldn\'t has some options', () => {
    store.setType('ladder')
    store.setRail()
    store.setGate()
    store.setForm(5)
    store.setType('fType')
    expect(store.rail).toBe(false)
    expect(store.gate).toBe(false)
    expect(store.form).toBe(0)
  })

  it('Set energy', () => {
    store.setType('mType')
    store.setEnergy(true)
    expect(store.type).toBe('ladder')
  })

  it('Generate image path', () => {
    expect(store.imgPath).toBe('ladder/0/001/')
    store.setForm(3)
    expect(store.imgPath).toBe('ladder/3/001/')
    store.setType('fType')
    store.setRack()
    store.setRail()
    expect(store.imgPath).toBe('fType/0/111/')
  })

  it('Generate image name', () => {
    expect(store.imgName).toBe('main-800-400.jpg')
    store.setWidth(2000)
    store.setHeight(2000)
    expect(store.imgName).toBe('main-1200-400.jpg')
    store.setType('pType')
    store.setHeight(0)
    expect(store.imgName).toBe('main-500-600.jpg')
    store.setWidth(800)
    expect(store.imgName).toBe('main-500-700.jpg')
    store.setWidth(320)
    expect(store.imgName).toBe('main-500-300.jpg')
  })

  it('Generate price', () => {
    expect(store.price).toBe('7,000')
    store.setWidth(1200)
    store.setHeight(700)
    store.setForm(8)
    store.setColor(3)
    store.setRack()
    store.setRail()
    expect(store.price).toBe('15,750')
    store.setType('fType')
    expect(store.price).toBe('8,300')
    store.setType('ladder')
    store.setForm(8)
    store.setEnergy(true)
    expect(store.price).toBe('17,250')
  })

})
