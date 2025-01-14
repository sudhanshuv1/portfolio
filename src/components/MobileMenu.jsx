import React from 'react'
import { NavLink } from 'react-router-dom'
import { RxCross1 } from "react-icons/rx";

const MobileMenu = ({isOpen, toggleMobileMenu}) => {

    const navClass = "bg-white flex flex-col justify-center items-center h-screen w-[75vw] z-20 lg:hidden px-10 fixed translate-x-[-100%] duration-500 ease-in-out [&>*]:my-[10px]";

  return (
    <div className= {`${navClass} ${isOpen ? 'right-[-75vw]' : 'right-[-200%]'}`}>
        <RxCross1 
            className="text-2xl text-black absolute top-5 right-5 hover:cursor-pointer" 
            onClick={toggleMobileMenu}    
        />
        <NavLink to="/about" onClick={toggleMobileMenu} className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
            About
        </NavLink>
        <NavLink to="/projects" onClick={toggleMobileMenu} className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
            Projects
        </NavLink>
        <NavLink to="https://drive.google.com/file/d/1qxW5AzAV2rJ-4Hx9YCCOt8i_pLUnCiE_/view?usp=drive_link" onClick={toggleMobileMenu} className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
            Resume
        </NavLink>
        <NavLink to="https://sudhanshut.blogspot.com/" onClick={toggleMobileMenu} className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
            Blog
        </NavLink>
    </div>
  )
}

export default MobileMenu