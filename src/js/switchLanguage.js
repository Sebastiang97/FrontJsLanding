import data from './data/lenguage'
import changeTexts from './helpers/changeText'
import { select, selectAll } from './helpers/selectors'

const switchLenguageElement = select('#switchLenguage')
const amount = data.lenguages.length
changeTexts(1)
let swtchLenguage = 0

const switchLanguage = () => {
  switchLenguageElement.addEventListener('click', () => {
    changeTexts(swtchLenguage)
    swtchLenguage++

    if (swtchLenguage === amount) {
      swtchLenguage = 0
    }
  })
}

export default switchLanguage
