import intersection from './intersection'

const init = (THREE) => {
  /**
   * Scene
   */
  const scene = new THREE.Scene()

  /**
   * Viewport Size
   */
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  }

  /**
   * Resize Window
   */
  window.addEventListener('resize', () => {
    // Viewport Update
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Camera Update
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Renderer Update
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  })

  /**
   * Camera
   */
  const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    1000
  )
  camera.position.z = 400
  scene.add(camera)

  /**
   * instance Render
   */
  let renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(sizes.width, sizes.height)

  const container = document.getElementById('scene')
  container.appendChild(renderer.domElement)
  renderer.setClearColor(0x000000, 0.0)

  //renderer.setClearColor(new Three.Color('#21282a'), 1)

  /**
   * particles
   */
  let particles = new THREE.Object3D()
  scene.add(particles)

  /**
   * Shape of the particles
   */
  let geometry = new THREE.TetrahedronGeometry(4, 2)
  let material = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    shading: THREE.FlatShading,
  })

  /**
   * Position Particles
   */

  for (let i = 0; i < 1000; i++) {
    let mesh = new THREE.Mesh(geometry, material)
    mesh.position
      .set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5)
      .normalize()
    mesh.position.multiplyScalar(90 + Math.random() * 700)
    mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2)
    particles.add(mesh)
  }

  /**
   * Light In the Scene
   */
  let ambientLight = new THREE.AmbientLight(0x999999)
  scene.add(ambientLight)

  let lights = []
  lights[0] = new THREE.DirectionalLight(0xffffff, 1)
  lights[0].position.set(1, 0, 0)
  lights[1] = new THREE.DirectionalLight(0x11e8bb, 1)
  lights[1].position.set(0.75, 1, 0.5)
  lights[2] = new THREE.DirectionalLight(0x8200c9, 1)
  lights[2].position.set(-0.75, -1, 0.5)
  scene.add(lights[0])
  scene.add(lights[1])
  scene.add(lights[2])

  /**
   * Render Scene, Camera
   */

  let contador = 0
  const clock = new THREE.Clock()
  const render = () => {
    const elapsedTime = clock.getElapsedTime()

    particles.rotation.x = elapsedTime * 0.08

    // particles.rotation.y += 0.0
    // particles.rotation.x -= 0.004

    renderer.render(scene, camera)
    requestAnimationFrame(render)
  }
  render()
  intersection(lights, THREE)
}

export default init
