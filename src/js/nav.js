import { select, selectAll } from './helpers/selectors'
const navCollapse = () => {
  const menu = select('#menu')
  const menuCollapse = select('#menu-collapse')

  menu.addEventListener('click', () => {
    menuCollapse.classList.toggle('Collapse')
  })
}

export default navCollapse
