import { useState } from 'react'
import './index.css'
import Listas from './Listas/Listas'
import Objetos from './Objetos/Objetos'
import ListaDinamica from './ListaDinamica/ListaDinamica'
function App() {
  const [count, setCount] = useState(0)

  return (
    //<div className='all'>
    //  <Imagen className="mid" name= "https://www.lanacion.com.ar/resizer/v2/elon-musk-cambio-el-logo-de-WHTIWEV47VHEHDV4QYC6PRXVBE.jpg?auth=29e4042f48af310deb7e46ab9afc31d8ef98589c3c1c1c29d6be7ce335477df1&width=420&height=280&quality=70&smart=false" title="Imagen X"/>
    //  <div className='mid'>
    //    <Login />
    //    <Account />
    //  </div>
    //</div>
    <div>
      <ListaDinamica />
    </div>

  )
}

export default App
