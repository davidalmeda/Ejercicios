import { useState } from 'react'
import './index.css'

function FormComplejo() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      })

  function handleOnChangeForm(event) {
    const val = event.target.value
    const type = event.target.name
    const newForm = {
        ...form,
       [type]: val
    }
    setForm(newForm)
  }


  function handleSubmit(event) {
    if (password != confirmPassword) {
        alert("La contraseña y su confirmacion debe coincidir")
      }
    event.preventDefault()
  }
  const {name, email, password, confirmPassword} = form
  return (
    <form className='form' onSubmit={(event) => handleSubmit(event)}>
      
        <label className='label'>
            Nombre
            <input minLength="3" type="text" required name="name" value={name} onChange={handleOnChangeForm} />
        </label>
      
        <label className='label'>
            Email
            <input type="email" required name="email" value={email} onChange={handleOnChangeForm} />
        </label>
      
        <label className='label'>
            Contraseña
            <input type="password" required name="password" pattern="^(?=.*[A-Za-z]{5,})(?=.*\d)(?=.*[@#$%_^&+=!]).*$" value={password} onChange={handleOnChangeForm} title="Debe contener al menos 5 letras, un número y un caracter especial"/>

        </label>
        <label className='label'>
            Confirmar Contraseña
            <input type="password" required name="confirmPassword" value={confirmPassword} onChange={handleOnChangeForm} />
        </label>

      <input type="submit" value="Enviar" className='send'/>
    </form>
  )
}

export default FormComplejo
