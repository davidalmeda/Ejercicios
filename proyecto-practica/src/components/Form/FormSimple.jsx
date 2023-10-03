import { useState } from 'react'
import './index.css'

function FormSimple() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  function handleOnChangeName(event) {
    const val = event.target.value

    setName(val)
  }

  function handleOnChangePassword(event) {
    const val = event.target.value

    setPassword(val)
  }

  function handleOnChangeEmail(event) {
    const val = event.target.value

    setEmail(val)
  }

  function handleOnChangeConfirmPassword(event) {
    const val = event.target.value

    setConfirmPassword(val)
  }


  function handleSubmit(event) {
    if (password != confirmPassword) {
      alert("La contraseña y su confirmacion debe coincidir")
    }
    event.preventDefault()
  }

  return (
    <form className='form' onSubmit={(event) => handleSubmit(event)}>
      
      <label className='label'>
        Nombre
        <input minLength="3" type="text" required name="nombre" value={name} onChange={handleOnChangeName} />
      </label>
      
      <label className='label'>
        Email
        <input type="email" required name="email" value={email} onChange={handleOnChangeEmail} />
      </label>
      
      <label className='label'>
        Contraseña
        <input type="password" required name="contraseña" pattern="^(?=.*[A-Za-z]{5,})(?=.*\d)(?=.*[@#$%_^&+=!]).*$" value={password} onChange={handleOnChangePassword} title="Debe contener al menos 5 letras, un número y un caracter especial"/>
      </label>

      <label className='label'>
        Confirmar Contraseña
        <input type="password" required name="confirmacion-contraseña" value={confirmPassword} onChange={handleOnChangeConfirmPassword} />
      </label>

      <input type="submit" value="Enviar" className='send'/>
    </form>
  )
}

export default FormSimple
