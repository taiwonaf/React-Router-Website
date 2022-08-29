import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Layouts = () => {
  return (
    <div className='layout' style={{backgroundImage: "/images/background.jpg"}}>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default Layouts