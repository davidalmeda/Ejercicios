import { useState } from 'react'
import './index.css'
import Header from '../Header/Header'
import Button from '../Button/Button'
import { useNavigate } from 'react-router'
function App() {
  const navigate = useNavigate()
  function handleRedirect(route) {
    navigate(route)
  }
  return (
    <>
      <div className='header'>
        <Header />
      </div>
      <Button onClick={() => handleRedirect("/home")} text="Ir al home"/>
      <Button onClick={() => handleRedirect("/about")} text="Ir al about"/>
    </>
  )
}

export default App