import React from 'react'

import { Outlet } from 'react-router-dom'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar'

const MainLayout = () => {
    return (
        <div>

            <Navbar/>
            
            <Outlet/>
            <ToastContainer autoClose={15000}/>
        </div>
    )
}

export default MainLayout
