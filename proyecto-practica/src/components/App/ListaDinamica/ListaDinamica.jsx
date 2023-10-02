import { useState } from 'react'
import './index.css'
import Button from '../../Button/Button'
const lista = [
    {id:1, name:"HOLA"},
    {id:2, name:"ADIOS"},
    {id:3, name:"BUENAS"},
]
function ListaDinamica() {
    const [list, setList] = useState(lista)
    function handleRemove(index) {
        setList(prevList => {
            const copy = [...prevList]
            copy.splice(index, 1)
            return copy
        })
    }
    function handleAdd() {
        setList(prevList => {
            const copy = [...prevList, {id: Date.now() * Math.random(), name: `New element ${prevList.length}`}]
            return copy
        })
    }
    return (
        <div>
            <ul className='all'>
                {
                    list.map((item, index) => 
                        <li className="list-ele" key={item.id}>
                            {item.name}
                            <Button className="button" onClick={() => handleRemove(index)} text="Eliminar Elemento"/>
                        </li>)
                }
            </ul>
            <Button className="button button-add" onClick={() => handleAdd()} text="Añadir Elemento"/>
        </div>

  )
}

export default ListaDinamica
