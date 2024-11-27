import React from 'react';
import Logo from '../assets/images/logo_2.png'
import DarkMode from '../navbar/DarkMode'
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from 'react-icons/fa6';

const Menu=[
  {
    id:1,
    name:"Home",
    link:"/#",
  },
  {
    id:2,
    name:"Top Rated",
    link:"/#services"
  },
  {
    id:3,
    name:"Kids Wear",
    link:"/#",
  },
  {
    id:3,
    name:"Mens Wear",
    link:"/#",
  },
  {
    id:3,
    name:"Electronics",
    link:"/#",
  },
]
  const NavBar=()=>{
  return(
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white
    duration-200 relative z-40'>
        {/* Upper NavBar */}
      <div className='bg-primary/40 py-2'>
        <div className='container flex justify-between items-center'>
          <div className='font-bold
              text-2xl sm:text-3xl flex gap-2'>
            <a href="#" className='font-bold
              text-2xl sm:text-3xl flex gap-10'>
            <img src={Logo} alt='Logo' className='w-20 '/>
            </a>
            <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text hover:bg-gradient-to-l transition-all duration-500 ease-in-out">
              Store
             </span>
          </div>
          {/* Search Bar and Order Button */}
          <div className='flex justify-between items-center gap-4'>
            <div className='relative group hidden sm:block'>
              <input type='text' placeholder="Search for items....." 
              className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all 
              durationn-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1
              focus:border-primary'>
              </input>
              <IoMdSearch className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3'/>
            </div>
          </div>
          {/* OrderBUtton */}
           <button
           onClick={()=> alert("Ordering not available yet")}
           className='bg-gradient-to-r from-primary to-secondary
           transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center 
           gap-3 group' >
             <span className='group-hover:block hidden transition-all duration-200'>
              Order
             </span>
             <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer'/>
           </button>
           {/* DarkMode Switch */}
           <div>
            <DarkMode/>
           </div>
        </div>
      </div>
      {/* Lower NavBar */}
      <div className='flex justify center'>
        <ul className='sm:flex hidden items-center gap-4'>
          {
              Menu.map((data)=>(
              <li key={data.id}>
                <a href={data.link} className='inline-block
                px-4 hover:text-secondary duration-200 no-underline'>{data.name}</a>
              </li>
            ))
          }
          {/* Simple DropDown with Links */}
          <li>
            <a href="#" className="inline-block px-4 hover:text-secondary duration-200 no-underline">Trending Items</a>
          </li>
        </ul>
      </div>



    </div>
  );
};

export default NavBar;