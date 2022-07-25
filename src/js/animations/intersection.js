import { select, selectAll } from '../helpers/selectors'

const intersection = (lights, Three) => {
  const lazyLoadingCallback = (entries) => {
    select('#scene')
    for (let entry of entries) {
      if (entry.isIntersecting) {
        const { colorone, colortwo } = entry.target.dataset
        console.log({ colorone, colortwo })
        lights[1].color = new Three.Color(colorone)
        lights[2].color = new Three.Color(colortwo)
      }
    }
  }

  let lazyLoadingObserver = new IntersectionObserver(lazyLoadingCallback, {
    rootMargin: '0px 0px -500px 0px',
  })

  const images = selectAll('.space')

  for (let image of images) {
    lazyLoadingObserver.observe(image)
  }
}

export default intersection
