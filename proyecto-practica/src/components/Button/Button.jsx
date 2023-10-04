import './index.css'

function Button({onClick, text, children, visible}) {
  if (!visible) {
    return
  }
  return (
    <div>
     <button onClick={onClick} className="button">{children ? children : text}</button>
    </div>
  )
}

export default Button