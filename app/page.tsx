import { readFile } from "fs/promises"
import { marked } from "marked"
import Image from "next/image"

import Form from "./components/Form"

import IconHorizontal from "./components/IconHorizontal"
import Ipad from "./components/project"
import Project from "./projects/page"
import Contact from "./components/contact"
export default async function Home() {
  const text = await readFile('app/content/front.md','utf8')
  const html = marked(text)
  return (<>
  
<div className="flex flex-col  bg-slate-900 pb-10 ">

  <div className="flex lg:flex-row flex-col grow items-center justify-center pt-10 pr-10 pl-10 ">


    <div className="bg-dark  p-3  rounded-lg flex flex-col items-center w-screen">
  
     <Image src="/images/pro1.jpg" width="400" height="400" className="rounded-full pb-1" alt="profile photo" priority/>
     <div className='text-center '>
    <h1 className=" font-roboto text-black text-5xl  bg-clip-text font-bold">Hi, I am Pouria </h1>
  <h2 className="pt-2 text-dark text-lg">A Full stack web Developer </h2>
  </div>

    

       <Form /> 
       <div className="w-1 h-10 bg-black rounded-full"></div>
       <p className="font-roboto text-2xl text-justify  pt-11 pb-5">About me</p>
       <article dangerouslySetInnerHTML={{__html:html}} className=" font-roboto text-xl text-justify italic pb-3"/>
       

       <p className="font-roboto text-2xl text-justify pt-11 pb-5">My Skill</p>

       <IconHorizontal/>
       
       <p className="font-roboto text-2xl text-justify pt-11 pb-5">My Projects And Certificates</p>
       <Project />


       <p className="font-roboto text-2xl text-justify pt-11 pb-5">Contact Me Here</p>
       <p className="font-roboto text-xl text-justify  pb-5">Please contact me directly at puriyaj@gmail.com or through this form.</p>
       <Contact />

  </div>

</div>


</div>




    
 




 


  </>

  )
}
