import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import MobileMenu from './MobileMenu'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const overlayClass = "fixed w-screen h-screen bg-[#00000080] top-0 left-0 bottom-0 right-0 z-20";

    const toggleMobileMenu = () => {
        setIsOpen(prevState => !prevState)
    }

  return (
    <>
      <div className={`${overlayClass} ${isOpen ? 'block' : 'hidden'}`}></div>
      <header className="header">
            <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
                <p className="blue-gradient_text">ST</p>
            </NavLink>
            <RxHamburgerMenu className="text-3xl lg:hidden text-black hover:cursor-pointer" onClick={toggleMobileMenu} />
            <nav className="flex text-lg gap-7 font-medium hidden lg:flex">
                <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                    About
                </NavLink>
                <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                    Projects
                </NavLink>
                <NavLink to="https://drive.google.com/file/d/172qGyZqrMRjjHp3byq6Z8pYyKMpWrcY0/view?usp=sharing" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                    Resume
                </NavLink>
                <NavLink to="https://sudhanshut.blogspot.com/" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                    Blog
                </NavLink>
            </nav>
      </header>
      <MobileMenu 
        isOpen={isOpen}
        toggleMobileMenu={toggleMobileMenu} 
      />
    </>
  
  )
}

export default Navbar
