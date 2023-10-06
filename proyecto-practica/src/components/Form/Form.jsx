import { useState } from 'react'
import './index.css'
import useForm from './useForm'
function Form() {
    const { form, handleOnChangeForm, handleSubmit } = useForm()
    const { text, number, checkbox, date, file, radio } = form
    return (
        <form className='form' onSubmit={(event) => handleSubmit(event)}>

            <label className='label'>
                Texto
                <input className='input' type="text" required name="text" value={text} onChange={handleOnChangeForm} />
            </label>

            <label className='label'>
                Número
                <input className='input' type="number" name="number" value={number} onChange={handleOnChangeForm} />
            </label>

            <label className='label'>
                Checkbox
                <input className='input' type="checkbox" name="checkbox" value={checkbox} onChange={handleOnChangeForm} />

            </label>
            <label className='label'>
                Fecha
                <input className='input' type="date" required name="date" value={date} onChange={handleOnChangeForm} />
            </label>
            <label className='label'>
                Fichero
                <input className='input' type="file" name="file" onChange={handleOnChangeForm} />
            </label>

            <label className='label'>Hombre<input type="radio" name="radio" value="hombre" checked={radio === 'hombre'} onChange={handleOnChangeForm} /></label>
            <label className='label'>Mujer<input type="radio" name="radio" value="mujer" checked={radio === 'mujer'} onChange={handleOnChangeForm} /></label>
            <label className='label'>Otro<input type="radio" name="radio" value="otro" checked={radio === 'otro'} onChange={handleOnChangeForm} /></label>

            <input type="submit" value="Enviar" className='send' />
        </form>
    )
}

export default Form