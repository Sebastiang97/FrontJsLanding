import data from '../data/lenguage'
import featuresCustoms from './featuresCustoms'
import { select, selectAll } from './selectors'

const mainTitle = select('#mainTitle')
const tileSection = select('#tileSection')
const mainTitleSection = select('#mainTitleSection')
const featuresMainArticle = select('#featuresMainArticle')
const featuresSecondArticle = select('#featuresSecondArticle')
const featuresthirdArticle = select('#featuresthirdArticle')
const featuresfourthArticle = select('#featuresfourthArticle')
const switchLenguageElement = select('#switchLenguage')

const btns = selectAll('.btn-a')
const changeTexts = (lenguaje) => {
  const lenguages = data.lenguages[lenguaje]
  const mainfeatures = data[lenguages].mainArticle.features
  const secondArticle = data[lenguages].secondArticle.features
  const thirdArticle = data[lenguages].thirdArticle.features
  const fourthArticle = data[lenguages].fourthArticle.features

  switchLenguageElement.innerHTML = data[lenguages].btnLenguage
  mainTitle.innerHTML = data[lenguages].mainArticle.title
  mainTitleSection.innerHTML = data[lenguages].mainArticle.title
  tileSection.innerHTML = data[lenguages].titleSection
  featuresMainArticle.innerHTML = featuresCustoms(mainfeatures)
  featuresSecondArticle.innerHTML = featuresCustoms(secondArticle)
  featuresthirdArticle.innerHTML = featuresCustoms(thirdArticle)
  featuresfourthArticle.innerHTML = featuresCustoms(fourthArticle)
  btns.forEach((btn) => {
    btn.innerHTML = data[lenguages].btnAll
  })
}

export default changeTexts
