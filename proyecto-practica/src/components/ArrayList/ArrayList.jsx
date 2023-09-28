import Button from '../Button/Button'
import './index.css'
const ejemplo = [
    {
      name: "Fulanito",
      color: "royalblue",
      checked: true
    },
    {
      name: "Menganito",
      color: "cyan",
      checked: false
    },
    {
      name: "Jhon Doe",
      color: "purple",
      checked: false
    }
  ]
function ArrayList() {
    function click(item) {
        window.alert(`${item.name} ${item.color} ${item.checked}`)
    }

    function renderList() {
        return ejemplo.map((elem) => 
            <li className='element' key = {elem.name}>
                <p style={{ color: elem.color, fontWeight: elem.checked ?  "bold" : "normal"}}>{elem.name}</p>
                <Button onClick={() => click(elem)} className='button' text = {elem.name} />
            </li>
        )
    }

  return (
    <div>
        <ol className='lista-especial'>
            {renderList()}
        </ol>
    </div>
  )
}

export default ArrayList