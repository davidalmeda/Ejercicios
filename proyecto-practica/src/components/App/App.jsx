import { useState } from 'react'
import './index.css'
import Panel from '../Panel/Panel'
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
    <Panel title="BIENVENIDO A CONTRAER Y EXPANDIR">
      <a href ="https://mybabel.sharepoint.com/">BABELNET</a>
      <p>AHORA ESTA EXPANDIDO</p>
    </Panel>
  )
}

export default App
