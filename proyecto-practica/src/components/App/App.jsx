import { useState } from 'react'
import './index.css'
import Form from '../Form/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='all'>
      <Form/>
    </div>
  )
}

export default App
