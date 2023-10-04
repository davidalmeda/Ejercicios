import { useState, useRef } from 'react'
import './index.css'
import Button from '../Button/Button'

function Countdown({ seconds }) {
    const [countdown, setCountdown] = useState(seconds)
    const [visible, setVisible] = useState(true)
    const intervalRef = useRef(null)

    function fin() {
        alert("Terminado")
    }

    function stop() {
        setVisible(true)
        clearInterval(intervalRef.current)
        setCountdown(seconds)
    }

    function intervalfn() {
        setCountdown(prevCountdown => {            
            if (prevCountdown <= 0) {
                clearInterval(intervalRef.current)
                fin()
                return 0
            }
            return prevCountdown - 1
        })
    }

    function startCountdown() {
        setVisible(false)
        intervalRef.current = setInterval(() => {
            intervalfn();
        }, 1000)
    }

    

  return (
    <div className='countdown'>
        <h1>Countdown</h1>
        <p className='time'>{countdown}</p>
        <Button text="Iniciar" onClick={startCountdown} visible={visible}/>
        <Button text="Parar" onClick={stop} visible={!visible}/>
    </div>
  )
}

export default Countdown