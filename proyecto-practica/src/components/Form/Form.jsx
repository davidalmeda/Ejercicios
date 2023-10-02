import { useState } from "react";
import Loader from '../Loader/Loader'

function Form() {

    const [input, setInput] = useState("")
    const [send, setSend] =  useState(false)

    function handleSubmit(event) {
        event.preventDefault()
        setSend(true)
        setTimeout(() => setSend(false), 2000)
    }

    function handleOnChangeName(event) {
        const val = event.target.value
        setInput(val)
    }

    return (
        <>       
            <form onSubmit={(event) => handleSubmit(event)}>
            <input type="text" name="nombre" value={input} onChange={handleOnChangeName} />
            <input type="submit" value="Enviar" />
            </form> 
        <Loader isShown={send}/>
        </>
    )
    }

export default Form