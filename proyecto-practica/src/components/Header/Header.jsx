import './index.css'
import Imagen from '../Imagen/Imagen'
import Navegation from '../Navegation/Navegation'

function Header() {
  return (
    <div className='header'>
        <Imagen className="logo" name= "https://www.lanacion.com.ar/resizer/v2/elon-musk-cambio-el-logo-de-WHTIWEV47VHEHDV4QYC6PRXVBE.jpg?auth=29e4042f48af310deb7e46ab9afc31d8ef98589c3c1c1c29d6be7ce335477df1&width=420&height=280&quality=70&smart=false" title="Imagen X"/>
        <Navegation />
    </div>
  )
}

export default Header
