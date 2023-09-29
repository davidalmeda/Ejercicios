import './index.css'
import { useState } from 'react'
import Button from '../Button/Button'
function Panel({title, children}) {
    const [bool, setBool] = useState(false)
    function handleClick() {
        setBool(!bool)
    }
  return (
    <div>
        <h1>{title}</h1>

        {bool ? children : <></>}
        <Button onClick={() => handleClick()} className='acount' >
            <p>{bool ? "Contraer" : "Mostrar"}</p>
        </Button>
        
    </div>
  )
}

export default Panel