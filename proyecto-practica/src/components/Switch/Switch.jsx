import './index.css'
import { useState } from 'react'
import Button from '../Button/Button'
function Switch(props) {
    const [bool, setBool] = useState(false)

    function handleClick() {
        setBool(!bool)
    }

  return (
    <div className={`switch ${bool ? 'active' : 'deactive'}`}>
        <p>{bool ? 'Activado' : 'Desactivado'}</p>
        <Button onClick={() => handleClick()} className='acount' text = "Iniciar sesión" />
    </div>
  )
}

export default Switch