import { useState } from 'react'
import { Outlet } from 'react-router'
import { NavLink } from "react-router-dom";
import './index.css'
import Header from '../Header/Header'
function Home() {

    return (
        <>
            <div className='header'>
                <Header />
            </div>
            <div className='rutas'>
                <div className='links'>
                    <ul className='lista'>
                        <li><NavLink to="/home/first" className={({ isActive }) => isActive ? "link active" : "link"} > ENLACE 1</NavLink></li>
                        <li><NavLink to="/home/second" className={({ isActive }) => isActive ? "link active" : "link"} > ENLACE 2</NavLink></li>
                        <li><NavLink to="/home/third" className={({ isActive }) => isActive ? "link active" : "link"} > ENLACE 3</NavLink></li>
                        <li><NavLink to="/home/fourth" className={({ isActive }) => isActive ? "link active" : "link"} > ENLACE 4</NavLink></li>
                    </ul>
                </div>
                <div className='content'>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Home