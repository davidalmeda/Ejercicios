import './index.css'
import ListaProductos from '../ListaProductos/ListaProductos'
import Cart from '../Cart/Cart'
const productos = [
  {imagen:"https://img2.rtve.es/i/?w=1600&i=1657019155649.jpg", nombre:"Poster goku niño", descripcion:"Poster 300X200 de goku con la nube kinton", precio:11, stock:2},
  {imagen:"https://phantom-marca-mx.unidadeditorial.es/c708d3f32aaab50aa7790eae59c8fd2d/resize/828/f/jpg/mx/assets/multimedia/imagenes/2023/05/21/16846238697919.jpg", nombre:"Poster Goku vs Vegetta", descripcion:"Poster de Goku ssj blue vs vegetta ssj blue", precio:31, stock:2},
  {imagen:"https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/02/dragon-ball-significan-nombres-personajes-1858451.jpg?tf=3840x", nombre:"Poster Goku y amigos", descripcion:"Poster de goku con su familia, amigos y resto de los guerreros Z", precio:5, stock:2},
  {imagen:"https://i.blogs.es/885670/screenshot_3619/450_1000.webp", nombre:"Poster Yayirobe dragon ball", descripcion:"Poster de Yayirobe, el gran guerrero capaz de cortar la cola de Vegeta Ozaru", precio:34, stock:0},
  {imagen:"https://erikstore.com/blog/wp-content/uploads/2023/05/Tranformaciones-son-goku-dragon-ball-1080x675.jpg", nombre:"Alfombrilla raton Goku", descripcion:"Alfombrilla raton Goku transformaciones", precio:14, stock:2},
]
function App() {

  return (
    <div className='all'>
      <div className='cart'>
        <Cart />
      </div>
      <ListaProductos productos={productos}/>
    </div>
  )
}

export default App
