import { useState } from 'react'
import './index.css'
import Button from '../../Button/Button'

function Listas() {
    const [list, setList] = useState([])
    function insertItem() {
        setList((prevList) => {
            const copy =[...prevList]
            copy.push(`New element ${copy.length}`)
            //const copy2 = [...prevList, `New element ${copy.length}`]
            return copy
        })
    }
    function filterList() {
        setList((prevList) => {
            return prevList.filter((elem) => elem.includes("2"))
        })
    }
    function removeThird() {
        setList((prevList) => {
            const copy =[...prevList]
            copy.splice(2, 1)
            return copy
        })
    }
    return (
        <div>
            <Button className="button" onClick={() => insertItem()} text = "Agregar elemento"/> 
            <Button className="button" onClick={() => filterList()} text="Filtrar lista"/> 
            <ul className='all'>
                {list.map((item) => <li key={item}>{item}</li>)}
            </ul>
        </div>

  )
}

export default Listas
