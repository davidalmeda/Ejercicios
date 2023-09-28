import './index.css'
import Imagen from '../Imagen/Imagen'

function Card(props) {
  return (
    <div className='one-card'>
        <Imagen className="img-card" name={props.name}  title={props.title}/>
        <p className='description'>{props.title}</p>
    </div>
  )
}

export default Card
