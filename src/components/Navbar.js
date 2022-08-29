import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  const [ham, setHam] = useState(false)
  console.log(ham)
  return (
    <div className='navbar'>
        <div className="brand">
            <h2>clearMix</h2>
        </div>
        <div className="nav-items" style={ham ? {display: "block", top: "80px"}: null}>
            <ul>
                <li><NavLink to={'/'} className={({isActive}) => isActive ? "nav-link active-nav-link": "nav-link"}>Home</NavLink></li>
                <li><NavLink to={'Testimonials'} className={({isActive}) => isActive ? "nav-link active-nav-link": "nav-link"}>Testimonial</NavLink></li>
                <li><NavLink to={'Pricing'} className={({isActive}) => isActive ? "nav-link active-nav-link": "nav-link"}>Pricing</NavLink></li>
                <li><NavLink to={'Login'} className={({isActive}) => isActive ? "nav-link active-nav-link": "nav-link"}>Login</NavLink></li>
                <li><NavLink to={'Schedule'} className={({isActive}) => isActive ? "schedule active-schedule": "schedule"}>Schedule a demo</NavLink></li>
            </ul>
        </div>
        <div className="hambuger" onClick={() => setHam(!ham)} >
          <div className="ham ham1"></div>
          <div className="ham ham2"></div>
          <div className="ham ham3"></div>
        </div>
    </div>
  )
}

export default Navbar