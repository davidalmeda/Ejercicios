import { useState } from 'react'
import './index.css'
import Imagen from '../Imagen/Imagen'
import Header from '../Header/Header'
import Card from '../Card/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
  //  <div className='all'>
  //    <Imagen className="mid" name= "https://www.lanacion.com.ar/resizer/v2/elon-musk-cambio-el-logo-de-WHTIWEV47VHEHDV4QYC6PRXVBE.jpg?auth=29e4042f48af310deb7e46ab9afc31d8ef98589c3c1c1c29d6be7ce335477df1&width=420&height=280&quality=70&smart=false" title="Imagen X"/>
  //    <div className='mid'>
  //      <Login />
  //      <Account />
  //    </div>
  //    <EjercicioJsx />
  //  </div>
  <>
    <div className='header'>
    <Header />
    </div>
    <div className="cards">
      <Card name="https://enertic.org/wp-content/uploads/2021/05/Babel-1.png"  title="Logo de babel"/>
      <Card name="https://miro.medium.com/v2/resize:fit:1024/1*OohqW5DGh9CQS4hLY5FXzA.png"  title="Hello world"/>
      <Card name="https://www.campusciberseguridad.com/media/k2/items/cache/9267284e7733f4bec00d2e114d3f3ba1_XL.jpg"  title="Imagen de un hacker"/>
    </div>
  </>
  )
}

export default App
