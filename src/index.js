// import lib from "../static/css/lib.css"
import index from './static/sass/index.scss'
import * as Three from 'three'
import rotation from './js/animations/rotation'
import init from './js/animations/scene'
import increaseWidth from './js/animations/increaseWidth'
import navCollapse from './js/nav'
import switchLanguage from './js/switchLanguage'

navCollapse()
init(Three)
rotation()
increaseWidth()
switchLanguage()
