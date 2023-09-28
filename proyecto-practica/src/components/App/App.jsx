import { useState } from 'react'
import './index.css'
import Login from '../Login/Login'
import Account from '../Account/Account'
import Imagen from '../Imagen/Imagen'
import Button from '../Button/Button'
function App() {
  const [count, setCount] = useState(0)
  function click() {
    window.alert("HOLA")
  }
  return (
    //<div className='all'>
    //  <Imagen className="mid" name= "https://www.lanacion.com.ar/resizer/v2/elon-musk-cambio-el-logo-de-WHTIWEV47VHEHDV4QYC6PRXVBE.jpg?auth=29e4042f48af310deb7e46ab9afc31d8ef98589c3c1c1c29d6be7ce335477df1&width=420&height=280&quality=70&smart=false" title="Imagen X"/>
    //  <div className='mid'>
    //    <Login />
    //    <Account />
    //  </div>
    //</div>

    <Button className='acount' text = "Iniciar sesión" type="secondary" disabled={true} onClick= {(() =>click())} />
  )
}

export default App
