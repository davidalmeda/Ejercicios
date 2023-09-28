import './index.css'
import Button from '../Button/Button'

function Login() {
  return (
    <div className='align'>
      <h1>Lo que está pasando ahora</h1>
      <h2>Únete hoy</h2>
      <div>
      <Button className='register' text = "Registrarse con Google" />
      <Button className='register' text = "Registrarse con Apple" />
      <p className='divider line one-line'>O</p>
      <Button className='register account' text = "Crear cuenta" />
      <p>Al regístarse, aceptas los 
        <a className="link" href='https://mybabel.sharepoint.com/'> Términos de servicio </a>       
        y la
        <a className="link" href='https://mybabel.sharepoint.com/'> Política de privacidad </a>
          incluida la politica de 
        <a className="link" href='https://mybabel.sharepoint.com/'> Uso de Cookies </a>
      </p>
    
      </div>
    </div>
  )
}

export default Login
