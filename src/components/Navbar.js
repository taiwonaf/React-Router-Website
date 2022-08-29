import React from 'react'
import { NavLink } from 'react-router-dom'

const navbar = () => {
  return (
    <div className='navbar'>
        <div className="brand">
            <h2>clearMix</h2>
        </div>
        <div className="nav-items">
            <ul>
                <li><NavLink to={'/'} className={({isActive}) => isActive ? "nav-link active-nav-link": "nav-link"}>Home</NavLink></li>
                <li><NavLink to={'Testimonials'} className={({isActive}) => isActive ? "nav-link active-nav-link": "nav-link"}>Testimonial</NavLink></li>
                <li><NavLink to={'Pricing'} className={({isActive}) => isActive ? "nav-link active-nav-link": "nav-link"}>Pricing</NavLink></li>
                <li><NavLink to={'Login'} className={({isActive}) => isActive ? "nav-link active-nav-link": "nav-link"}>Login</NavLink></li>
                <li><NavLink to={'Schedule'} className={({isActive}) => isActive ? "schedule active-schedule": "schedule"}>Schedule a demo</NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default navbar