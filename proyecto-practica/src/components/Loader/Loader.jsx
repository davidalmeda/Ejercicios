import { useState } from 'react'
import './index.css'

function Loader({ isShown }) {
  if(!isShown) return null
  return (
    <div className='loader'>
        <p>Cargando...</p>
    </div>
  )
}

export default Loader
