'use client'
import { Icon } from '@iconify/react';
const Footer = ( ) => {
  return(
    <footer >
      <div className="bg-creme flex  justify-center max-h-screen">
      <div className="self-center  text-black-900 flex flex-col ">
    
      </div>
  <div className=" flex justify-center">
  <div className="flex flex-col justify-center items-center">
  <p>Email:<a href="mailto:www.Puriyaj@gmail.com"> puriyaj@gmail.com</a> </p>
    <div className="flex flex-row gap-3 justify-center items-center h-20 w-20 pb-3">
    <Icon className='h-12 w-12 pb-2' icon="icon-park:github" onClick={() => window.open('https://github.com/puriyaj')}/>

    <Icon className='h-12 w-12 pb-2' icon="logos:whatsapp-icon"  onClick={() => window.open('https://wa.me/15783701320')} />
</div>   
    </div>
 
  </div>
  </div>
 
    
      

</footer>
  )
}

export default Footer