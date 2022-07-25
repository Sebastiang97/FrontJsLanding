import { select, selectAll } from '../helpers/selectors'

const $ = (selector) => document.querySelector(selector)
const $All = (selector) => document.querySelectorAll(selector)

const increaseWidth = () => {
  //let width = select('#blue').getBoundingClientRect().width
  window.addEventListener('scroll', () => {
    const { scrollY } = window

    // if (scrollY >= 430 && scrollY <= 1900) {
    //   select('#blue').setAttribute('style', `width: ${scrollY}px`)
    // }
    increaseW(430, scrollY)

    // increaseTransform(1700, scrollY)
    increaseOpacity(1800, scrollY, 0)
    increaseOpacity(1900, scrollY, 1)
    increaseOpacity(2100, scrollY, 2)
    increaseOpacity(2300, scrollY, 3)
    increaseOpacity(2500, scrollY, 4)

    // increaseTransform(2000, scrollY)
    // increaseOpacity(1800, scrollY, 0)
    // increaseOpacity(1900, scrollY, 1)
    // increaseOpacity(2100, scrollY, 2)
    // increaseOpacity(2300, scrollY, 3)
    // increaseOpacity(2500, scrollY, 4)
  })
}

const increaseW = (initLimit = 430, scrollY) => {
  if (scrollY >= initLimit && scrollY <= 1900) {
    select('#blue').setAttribute('style', `width: ${scrollY}px`)
  }
}

const increaseOpacity = (initLimit = 2000, scrollY, i) => {
  let increment = scrollY - initLimit
  if (scrollY >= initLimit && scrollY <= 3000) {
    selectAll('.features')[i].style.opacity = `${increment / 100}`
  }
}

const increaseTransform = (initLimit = 2000) => {
  let increment = scrollY - initLimit

  if (scrollY >= initLimit && scrollY <= 3000) {
    select('.listFeatures').style.transform = `translateY(-${increment}px)`
  }
}

export default increaseWidth
