'use client';
import Link from 'next/link';
 import {  Navbar } from 'flowbite-react';
const NavBar = () => {
  return( 




   
    

        <Navbar fluid rounded className='bg-creme'>
          <Navbar.Brand href="/">
           
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Portfolio</span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Link href="/" >
              Home
            </Link>
            <Link href="/projects">Project</Link>
            <Link href="/abilities">Skills</Link>
            <Link href="https://github.com/puriyaj/cv/blob/main/cv.pdf">Resume</Link>
          </Navbar.Collapse>
        </Navbar>
      );
    }
    
     


export default NavBar