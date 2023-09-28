import './index.css'

function Button(props) {
  return (
    <div>
    <button onClick={props.onClick} className={props.className}>{props.text}</button>
    </div>
  )
}

export default Button