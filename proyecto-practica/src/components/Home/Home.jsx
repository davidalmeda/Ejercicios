import { useState } from 'react'
import { Outlet } from 'react-router'
import { useMatch  } from "react-router-dom";
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
                        <li><a  className = {useMatch ("/home/first") ? "link active" : "link"} href='http://localhost:5173/home/first'>ENLACE 1</a></li>
                        <li><a  className = {useMatch ("/home/second") ? "link active" : "link"} href='http://localhost:5173/home/second'>ENLACE 2</a></li>
                        <li><a  className = {useMatch ("/home/third") ? "link active" : "link"} href='http://localhost:5173/home/third'>ENLACE 3</a></li>
                        <li><a  className = {useMatch ("/home/fourth") ? "link active" : "link"} href='http://localhost:5173/home/fourth'>ENLACE 4</a></li>
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