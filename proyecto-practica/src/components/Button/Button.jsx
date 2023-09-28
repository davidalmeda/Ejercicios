import './index.css'

function Button({children, className, text, type = "primary", disabled=false, onClick}) {
  return (
    <>
    <div>
    <button onClick={onClick} className={type=="primary" ? "coso1" : "coso2"} disabled={disabled} >{text}</button>
    </div>
    {children}
    </>
  )
}

export default Button