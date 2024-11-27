import React from 'react'
import Logo from '../assets/images/logo_transparent.png'
import {assets} from '../assets/frontend_assets/assets'
import { NavLink,Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <div className="flex items-center justify-between py-5 font-medium">
    {/* Logo */}
        <img src={Logo} className="w-36 py-1 absolute -top-6 left-0 -m-5" alt="Logo" />
        
        {/* Navigation Menu*/}
        <ul className="hidden sm:flex gap-5 text-sm text-gray-700 ml-auto py-5 relative bottom-2 right-40">
            {/* Home Option */}
            <NavLink to='/' className="flex flex-col items-center gap-1">
            <p>HOME</p>
            <hr className="w-6 h-[2px] bg-gray-700 border-none hidden" />
            </NavLink>

             {/* Collection Option */}
            <NavLink to='/collection' className="flex flex-col items-center gap-1">
            <p>COLLECTION</p>
            <hr className="w-6 h-[2px] bg-gray-700 border-none hidden" />
            </NavLink>

            {/* About Option */}
            <NavLink to='/about' className="flex flex-col items-center gap-1">
            <p>ABOUT</p>
            <hr className="w-6 h-[2px] bg-gray-700 border-none hidden" />
            </NavLink>
            
            {/* Contact Option */}
            <NavLink to='/contact' className="flex flex-col items-center gap-1">
            <p>CONTACT</p>
            <hr className="w-6 h-[2px] bg-gray-700 border-none hidden" />
            </NavLink>
        </ul>

        {/* Options in Profile */}
        <div className='flex items-center gap-6 py-1'>
            <img src={assets.search_icon} className='w-5 cursor-pointer relative bottom-3'alt="Search"/>
            <div className='group relative'>
                <img className='w-5 cursor-pointer relative bottom-3' src={assets.profile_icon} alt="Profile"></img>
                    <div className="hidden group-hover:block absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg">
                        <div className="flex flex-col gap-2 py-2 text-gray-600">
                            <p className="cursor-pointer px-4 py-2 hover:bg-gray-100 hover:text-black">
                                My Profile
                            </p>
                            <p className="cursor-pointer px-4 py-2 hover:bg-gray-100 hover:text-black">
                                Orders
                            </p>
                            <p className="cursor-pointer px-4 py-2 hover:bg-gray-100 hover:text-black">
                                LogOut
                            </p>
                        </div>
                    </div>
            </div>
        </div>
        {/* Cart Options */}
        <Link to='/cart' className='relative'>
           <img src={assets.cart_icon} className='w-5 min -w-5 relative left-4 -top-3' alt='Cart'/>
        </Link>

    </div>

  )
}

export default NavBar