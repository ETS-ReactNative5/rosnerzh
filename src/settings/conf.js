// colors hex
export const colors = [
  {color: '#b3b3b3'},
  {color: '#448ed4'},
  {color: '#c7ac7e'},
  {color: '#006e69'},
  {color: '#82c09a'},
  {color: '#344099'},
]
// react motion presents
export const transformPreset = {stiffness: 120, damping: 14}
export const opacityPreset = {stiffness: 80, damping: 26}
export const opacityFastPreset = {stiffness: 280, damping: 26}

// radius for circle offset icons
export const animationRadius = {
  desktop: 107,
  mobile: 57,
}

// Some lp consts
export const formIcons = [
  {id: 'volna', figcaption: 'Волна'},
  {id: 'skoba', figcaption: 'Скоба'},
  {id: 'avrora', figcaption: 'Аврора'},
  {id: 'duga', figcaption: 'Дуга'},
  {id: 'zigzag', figcaption: 'Зигзаг'},
  {id: 'neo1', figcaption: 'Нео 1'},
  {id: 'priamaia', figcaption: 'Прямая'},
  {id: 'trapecia', figcaption: 'Трапеция'},
  {id: 'neo2', figcaption: 'Нео 2'},
  {id: 'laguna', figcaption: 'Лагуна'},
  {id: 'neo_priamaya', figcaption: 'Нео прямая'},
  {id: 'neo_duga', figcaption: 'Нео дуга'},
  {id: 'neo_modern', figcaption: 'Нео модерн'},
  {id: 'skoba_priamaya', figcaption: 'Скоба прямая'},
  {id: 'trapecia_priamaya', figcaption: 'Трапеция прямая'},
]
export const formIconsLType = [
  {id: 'pType0', figcaption: 'pType0'},
  {id: 'pType1', figcaption: 'pType1'},
]
export const formIconsMType = [
  {id: 'mType0', figcaption: 'mType0'},
  {id: 'mType1', figcaption: 'mType1'},
  {id: 'mType2', figcaption: 'mType2'},
  {id: 'mType3', figcaption: 'mType3'},
]

export const typeIcons = [
  {id: 'mType', figcaption: 'Форма М'},
  {id: 'pType', figcaption: 'Форма П'},
  {id: 'fType', figcaption: 'Факстрот'},
  {id: 'gType', figcaption: 'Гусли'},
  {id: 'ladder', figcaption: 'Лесенка'},
]

const { NODE_ENV } = process.env
export let imageCDN, api_data, api_limits, api_desc, mailSender
if(NODE_ENV === 'development') {
// Domain name with images
  imageCDN = 'http://localhost:3000/img/'

//ENDPOINTS
  mailSender = 'http://localhost:5000/send.php'
  api_data = 'http://api.localhost:5000/data'
  api_limits = 'http://api.localhost:5000/limits'
  api_desc = 'http://api.localhost:5000/desc'
} else {
  mailSender = 'http://rosnerzh.ru/send.php'
  imageCDN = 'http://rosnerzh.ru/img/'
  api_data = 'http://api.rosnerzh.ru/data'
  api_data = 'http://api.rosnerzh.ru/data'
  api_limits = 'http://api.rosnerzh.ru/limits'
  api_desc = 'http://api.rosnerzh.ru/desc'
}
