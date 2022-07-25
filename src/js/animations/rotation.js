import { select, selectAll } from '../helpers/selectors'
const rotation = () => {
  const container = select('.container')
  const ticket = select('.ticket')

  const { width, height } = container.getBoundingClientRect()

  const halfWitdh = width / 2
  const halfHeigth = height / 2

  container.addEventListener('mousemove', (event) => {
    const { pageX, pageY } = event
    const rotationX = ((pageX - halfWitdh) / halfWitdh) * 10
    const rotationY = ((pageY - halfHeigth) / halfHeigth) * 10

    ticket.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`
  })

  container.addEventListener('mouseleave', (event) => {
    ticket.style.transform = `rotateX(0deg) rotateY(0deg)`
  })
}

export default rotation
