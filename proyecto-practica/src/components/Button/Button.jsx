import './index.css'

function Button(props) {
  return (
    <div>
    <button className={props.className}>{props.text}</button>
    </div>
  )
}

export default Button