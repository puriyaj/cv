import Image from "next/image"
import Form from "../Form"



const Me = async ()=> {
  
  return(
    <>
    


<div id="Up" className="   pt-10 rounded-lg flex flex-col items-center  ">

 <Image src="/images/pro1.jpg" width="400" height="400" className="rounded-full pb-1 pt-10 " alt="profile photo" priority/>
 <div className='text-center '>
<h1 className=" font-roboto text-gray-900 dark:text-gray-50 text-5xl  bg-clip-text font-bold ">Hi, I am Pouria </h1>
<h2 className="pt-2 text-gray-700 dark:text-gray-50 text-lg">A Full stack web Developer </h2>
</div>



   <Form /> 
   </div>

    </>
  )
}
export default Me