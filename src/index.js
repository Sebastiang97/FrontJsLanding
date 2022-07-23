// import lib from "../static/css/lib.css"
import index from './static/sass/index.scss'
import * as Three from 'three'
import rotation from './animations/rotation'
import init from './animations/scene'
import increaseWidth from './animations/increaseWidth'

// const init = () => {

//   const scene = new Three.Scene()
//   const canvas = document.querySelector('#scene')
//   const loader = new Three.TextureLoader()
//   const fondo = loader.load(background)

//   const particlesGeometry = new Three.BufferGeometry()
//   const particleCnt = 5000
//   const posArray = new Float32Array(particleCnt * 3)
//   for (let i = 0; i < particleCnt; i++) {
//     posArray[i] = (Math.random() - 0.5) * 5
//   }

//   particlesGeometry.setAttribute(
//     'position',
//     new Three.BufferAttribute(posArray, 3)
//   )

//   // Materials
//   const particlesMaterial = new Three.PointsMaterial({
//     size: 0.005,
//     map: fondo,
//     // transparent: true,
//   })
//   particlesMaterial.color = new Three.Color(0xff0000)

//   // Mesh
//   const particleMesh = new Three.Points(particlesGeometry, particlesMaterial)
//   scene.add(particleMesh)

//   // Lights

//   const pointLight = new Three.PointLight(0xffffff, 0.1)
//   pointLight.position.x = 2
//   pointLight.position.y = 3
//   pointLight.position.z = 4
//   scene.add(pointLight)

//   /**
//    * Sizes
//    */
//   const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight,
//   }

//   window.addEventListener('resize', () => {
//     // Update sizes
//     sizes.width = window.innerWidth
//     sizes.height = window.innerHeight

//     // Update camera
//     camera.aspect = sizes.width / sizes.height
//     camera.updateProjectionMatrix()

//     // Update renderer
//     renderer.setSize(sizes.width, sizes.height)
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
//   })

//   /**
//    * Camera
//    */
//   // Base camera
//   const camera = new Three.PerspectiveCamera(
//     75,
//     sizes.width / sizes.height,
//     0.1,
//     100
//   )
//   camera.position.x = 0
//   camera.position.y = 0
//   camera.position.z = 2
//   scene.add(camera)

//   // sceneElement.appendChild(renderer.domElement)
//   // render(renderer, scene, camera)

//   // Controls
//   // const controls = new OrbitControls(camera, canvas)
//   // controls.enableDamping = true

//   /**
//    * Renderer
//    */
//   const renderer = new Three.WebGLRenderer({
//     canvas: canvas,
//   })
//   renderer.setSize(sizes.width, sizes.height)
//   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
//   //renderer.setClearColor(new Three.Color('#21282a'), 1)
//   /**
//    * Animate
//    */

//   let mouseY = 0
//   let mouseX = 0

//   document.addEventListener('mousemove', (event) => {
//     mouseY = event.clientY
//     mouseX = event.clientX
//   })

//   const clock = new Three.Clock()

//   const render = () => {
//     const elapsedTime = clock.getElapsedTime()
//     particleMesh.rotation.y = -0.1 * elapsedTime
//     particleMesh.rotation.x = mouseY * (elapsedTime * 0.00008)
//     particleMesh.rotation.y = mouseX * (elapsedTime * 0.00008)

//     renderer.render(scene, camera)

//     requestAnimationFrame(render)
//   }
//   render()
// }

init(Three)
// intersection(particlesMaterial, Three)
rotation()
increaseWidth()
// function intersection(particlesMaterial) {
//   const lazyLoadingCallback = (entries) => {
//     for (let entry of entries) {
//       if (entry.isIntersecting) {
//         console.log('hi')
//         entry.target.src = entry.target.dataset.src
//         particlesMaterial.color = new Three.Color('skyblue')

//         //lazyLoadingObserver.unobserve(entry.target)
//       }
//     }
//   }

//   let lazyLoadingObserver = new IntersectionObserver(lazyLoadingCallback, {
//     rootMargin: '0px 0px -500px 0px',
//   })

//   const images = document.querySelectorAll('.space')

//   for (let image of images) {
//     lazyLoadingObserver.observe(image)
//   }
// }
