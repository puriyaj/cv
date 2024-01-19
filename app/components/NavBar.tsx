'use client';
import Link from 'next/link';
 import {  Navbar } from 'flowbite-react';
const NavBar = () => {
  return( 



  <nav className=''>
     <div className='flex justify-center  bg-gray-900 fixed  inset-x-0 top-3 '>
      <ul className='flex  gap-5  rounded-full bg-gray-950 w-fit p-4 text-gray-600 font-medium'>
      <li className='hover:text-gray-100'>Home</li>
      <li className='hover:text-gray-100'>About</li>
      <li className='hover:text-gray-100'>Projects</li>
      <li className='hover:text-gray-100'>Skills</li>
      <li className='hover:text-gray-100'>Experience</li>
      <li className='hover:text-gray-100'>Contact</li>
    </ul>
     </div>
  </nav>
  
      );
    }
    
     


export default NavBar