import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import './index.css'
import About from './components/About/About'
import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Child from './components/Child/Child'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path= '/' element= {<App />}/>
        <Route path= '/home' element= {<Home />}>
          <Route path= 'first' element= {<Child text="Primer enlace"/>} />
          <Route path= 'second' element= {<Child text="Segundo enlace"/>} />
          <Route path= 'third' element= {<Child text="Tercer enlace"/>} />
          <Route path= 'fourth' element= {<Child text="Cuarto enlace"/>} />
        </Route>
        <Route path= '/about' element= {<About />}/>

        <Route path= '*' element= {<h1>Not found</h1>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
