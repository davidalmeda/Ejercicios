import { useState } from 'react'
import './index.css'
import Button from '../../Button/Button'
const defaultUser = {
    username: "",
    email: "",
    role: "GUEST"
}
function Objetos() {
    const[user, setUser] = useState(defaultUser)
    function handleLogin() {
        const newUser = {
            username: "Juanito",
            email: "juanito@gmail.com",
            role: "ADMIN"
        }
        setUser(newUser)
    }

    function handleLogout() {
        setUser(defaultUser)
    }

    function handleChangeRole() {
        setUser(prevUser => {
            return {
                ...prevUser,
                role: "USER"
            }
        }) 
    }

    function handleDataChange(prop, val) {
        setUser(prevUser => {
            return {
                ...prevUser,
                [prop] : val
            }
        })
    }

    return (
        <div>
            <h4>{user.role}</h4>
            <p>{user.username} {user.email} </p>
            <Button className="button" onClick={handleLogin} text = "LogIn"/> 
            <Button className="button" onClick={handleLogout} text="LogOut"/> 
            <Button className="button" onClick={handleChangeRole} text="Change Role"/>
            <Button className="button" onClick={() => handleDataChange("role", "USER")} text="handleDataChange"/>
        </div>
  )
}

export default Objetos
