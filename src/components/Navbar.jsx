import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <p className="blue-gradient_text">ST</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                About
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                Projects
            </NavLink>
            <NavLink to="https://drive.google.com/file/d/1qxW5AzAV2rJ-4Hx9YCCOt8i_pLUnCiE_/view?usp=drive_link" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                Resume
            </NavLink>
            <NavLink to="https://sudhanshut.blogspot.com/" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                Blog
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar