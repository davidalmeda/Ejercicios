import './index.css'
import { useState } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
function Button({text, visible, children}) {
  var elmnt = document.getElementById("position");
  function scrollTop(){
    document.querySelector(".position-div").scrollTo({top:0, behavior:'smooth'})
  };

  return (
    <div className='button-div'>
     <button onClick={scrollTop} className={visible ? 'visible' : 'invisible'}>{children ? children : text}</button>
    </div>
  )
}

export default Button