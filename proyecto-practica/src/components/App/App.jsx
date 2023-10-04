import { useState } from 'react'
import './index.css'
import Countdown from '../Countdown/Countdown'

function App() {
  const [count, setCount] = useState(0)
  return (
    <Countdown seconds={5}/>
  )
}

export default App
