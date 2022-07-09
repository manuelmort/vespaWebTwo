import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { Link } from "react-router-dom"

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div class="">
    
        <div class=" bg-gray-800 z-30 bg-transparent">

            
      
        
            <div className=' bg-transparent  bg-gray-800'>
                <a href="/" class="bg-transparent <--lazy-code-right-here-lmao">
                    <img src="./vespa-logo.png" alt="vespa logo" class="bg-transparent inline-block scale-down object-cover lg:mb-2 pb-1 lg:pl-10" style={{maxWidth:"100px"}}/>
                    <p class="inline-block text-white font-semibold bg-transparent lg:text-3xl lg:mt-5 lg:ml-2">CSUS VESPA</p>
                </a>
                
                <Link to='#' className='menu-bars bg-transparent bg-gray-800'>
                    <FaIcons.FaBars class="bg-transparent text-white lg:mr-10 lg:mt-5 mt-2 mr-5 float-right" onClick={showSidebar} />
                </Link>
            </div>
        <nav className={sidebar ? 'nav-menu active z-10 bg-gray-800' : 'nav-menu bg-gray-800'}>
          <ul className='nav-menu-items bg-transparent   mx-0 w-full  bg-gray-800' onClick={showSidebar}>
            <li className='navbar-toggle bg-transparent'>
              <Link to='#' className='menu-bars bg-transparent'>
                <AiIcons.AiOutlineClose class="bg-transparent bg-gray-800 text-white" />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <a href={item.path} class = "bg-transparent">
                    <button href={item.path} class="hover:bg-green-600   w-full ">
                        <li key={index} className="bg-transparent text-right mt-2 text-white " 
                                style={{minHeight:"100px"}}>
                            <p class="bg-transparent text-right  text-3xl" href={item.path}>
                                {item.icon}
                                <span class="bg-transparent  ">{item.title}</span>
                            </p>
                        </li>
                    </button>
                </a>
              );
            })}
          </ul>
        </nav>
      </div>
      </div>
    
  );
}

export default Navbar;