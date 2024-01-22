'use client';
import { useState } from "react";

const NavBar = () => {

  return( 



  <nav>
     <div className='flex justify-center  top-0 absolute inset-x-0 inset-z-9999 sm:top-3  z-[999] sm:fixed'>
      <ul className='flex  gap-5  sm:rounded-full bg-gray-100 dark:bg-gray-950 sm:w-min p-4 text-gray-600 font-medium bg-opacity-80 backdrop-blur-[0.5rem] shadow-2xl w-full' >
      <li className='dark:hover:text-gray-100 hover:text-gray-950'><a href="#Up">Home</a></li>
      <li className='dark:hover:text-gray-100 hover:text-gray-950'><a href="#About">About</a></li>
      <li className='dark:hover:text-gray-100 hover:text-gray-950'><a href="#project">Projects</a></li>
      <li className='dark:hover:text-gray-100 hover:text-gray-950'><a href="#skill">Skills</a></li>
      <li className='dark:hover:text-gray-100 hover:text-gray-950'><a href="#experience">Experience</a></li>
      <li className='dark:hover:text-gray-100 hover:text-gray-950'><a href="#contact">Contact</a></li>
    </ul>
     </div>
  </nav>
  
      );
    }
    
     


export default NavBar