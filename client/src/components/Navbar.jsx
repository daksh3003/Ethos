import React from 'react'
import {HimenuAlt4} from "react-icons/hi";
import {AiOutlineClose} from "react-icons/ai";
import logo from "../../images/ethosLogo.png";
const Navbar = () => {
  return (
    <nav className='w-full flex-md:justify-center justify-between'>
      <div className='md:flex-[0.5] flex-initial justify-center items-center'>
        <img src={logo} alt='logo' className='w-32 cursor-pointer'></img>
     </div>
    </nav>
  )
}

export default Navbar
