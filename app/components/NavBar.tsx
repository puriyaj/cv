'use client';


const NavBar = () => {

  return( 



  <nav className=''>
     <div className='flex justify-center   fixed inset-x-0 inset-z-9999 top-3 p-5'>
      <ul className='flex  gap-5  rounded-full bg-gray-950 w-fit p-4 text-gray-600 font-medium'>
      <li className='hover:text-gray-100'><a href="#Up">Home</a></li>
      <li className='hover:text-gray-100'><a href="#About">About</a></li>
      <li className='hover:text-gray-100'><a href="#project">Projects</a></li>
      <li className='hover:text-gray-100'><a href="#skill">Skills</a></li>
      <li className='hover:text-gray-100'><a href="#experience">Experience</a></li>
      <li className='hover:text-gray-100'><a href="#contact">Contact</a></li>
    </ul>
     </div>
  </nav>
  
      );
    }
    
     


export default NavBar