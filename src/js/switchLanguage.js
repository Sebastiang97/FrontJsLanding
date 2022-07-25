import data from './data/lenguage'
import { select, selectAll } from './helpers/selectors'

const mainTitle = select('#mainTitle')
const tileSection = select('#tileSection')
const amount = data.lenguages.length
let swtchLenguage = 0
const featuresMainArticle = select('#featuresMainArticle')
const featuresSecondArticle = select('#featuresSecondArticle')
const featuresthirdArticle = select('#featuresthirdArticle')
const featuresfourthArticle = select('#featuresfourthArticle')

const switchLanguage = () => {
  select('#switchLenguage').addEventListener('click', () => {
    changeTexts(swtchLenguage)
    swtchLenguage++

    if (swtchLenguage === amount) swtchLenguage = 0
    // console.log(data.english.title)
    // console.log(data.spanish.title)
  })
}

const changeTexts = (lenguaje) => {
  const lenguages = data.lenguages[lenguaje]
  const mainfeatures = data[lenguages].mainArticle.features
  const secondArticle = data[lenguages].secondArticle.features
  const thirdArticle = data[lenguages].thirdArticle.features
  const fourthArticle = data[lenguages].fourthArticle.features

  mainTitle.innerHTML = data[lenguages].mainArticle.title

  featuresMainArticle.innerHTML = featuresCustoms(mainfeatures)
  featuresSecondArticle.innerHTML = featuresCustoms(secondArticle)
  featuresthirdArticle.innerHTML = featuresCustoms(thirdArticle)
  featuresfourthArticle.innerHTML = featuresCustoms(fourthArticle)
}

const featuresCustoms = (features) => {
  let elFeatures = ''

  features.map((feature) => {
    elFeatures += `
        <li>${feature}</li>
    `
  })
  return elFeatures
}

export default switchLanguage
