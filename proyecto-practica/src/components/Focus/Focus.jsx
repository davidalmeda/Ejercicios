import { useState } from 'react'
import './index.css'

function Focus() {
    let [color, setColor]=useState("black")
    let [backgroundColor, setbBackgroundColor]=useState("white")
    function handleFocus() {
        setColor("red")
    }
    function handleBlur() {
        setColor("blue")
    }
    function handleMouseEnter() {
        setbBackgroundColor("green")
    }
    function handleMouseLeave() {
        setbBackgroundColor("yellow")
    }
  return (
    <div className='all' tabIndex={0} style={{color: color, backgroundColor:backgroundColor}} onFocus={handleFocus} onBlur={handleBlur} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <p>Texto de ejemplo</p>
    </div>
  )
}

export default Focus

