const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const geometry = new THREE.CubeGeometry(5, 5, 20, 32)// <=fonctionne aussi avec le Cube(carré)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
const cylinder = new THREE.Mesh(geometry, material)

scene.add(cylinder)
camera.position.z = 20

renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
                          
function animate() {
    cylinder.rotation.x += 0.01
    cylinder.rotation.y += 0.01
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
}

animate()