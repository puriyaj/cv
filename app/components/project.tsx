import Image from "next/image"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import { BsArrowRight } from "react-icons/bs"
const Project = () => {
  return(<>
  <div className="flex flex-row gap-3">
    <div className="flex flex-col w-80 rounded-lg bg-slate-700 p-3">
     <Image src="/images/carpet.jpg" width={300} height={300} alt="carpet website" className="rounded-lg "/>
     <h1 className="text-xl p-3">Eleishe</h1>
     <p className="text-gray-300 ">Eleishe is a website that sells carpets. I worked on both the design and functionality of the site, handling both the front and back ends. I also helped with making sure user accounts are secure. This project was my last one at Tuv International.</p>
     <ul className="flex flex-row gap-2 flex-wrap pt-3 pb-3">
      <li className="whitespace-nowrap rounded-full bg-gray-600 dark:bg-gray-50 px-2.5 py-0.5 text-xs text-gray-100 dark:text-gray-900">Front-end</li>
      <li className="whitespace-nowrap rounded-full bg-gray-600 dark:bg-gray-50 px-2.5 py-0.5 text-xs text-gray-100 dark:text-gray-900">Laravel</li>
      <li className="whitespace-nowrap rounded-full bg-gray-600 dark:bg-gray-50 px-2.5 py-0.5 text-xs text-gray-100 dark:text-gray-900">Express.js</li>
      <li className="whitespace-nowrap rounded-full bg-gray-600 dark:bg-gray-50 px-2.5 py-0.5 text-xs text-gray-100 dark:text-gray-900">Passport.js</li>
     </ul>
 
       <a className="group bg-gray-950 px-4 md:px-7 py-2 md:py-3 flex items-center gap-2 rounded-lg outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 w-min pt-3 "><FaGithub/>REPOSITORIES</a>


    
  </div>
   
  <div className="flex flex-col w-80 rounded-lg bg-slate-700 p-3">
     <Image src="/images/indie-game.jpg" width={300} height={300} alt="carpet website" className="rounded-lg "/>
     <h1 className="text-xl p-3">Game Reviews</h1>
     <p className="text-gray-300 ">Eleishe is a website that sells carpets. I worked on both the design and functionality of the site, handling both the front and back ends. I also helped with making sure user accounts are secure. This project was my last one at Tuv International.</p>
     <ul className="flex flex-row gap-2 flex-wrap pt-3 pb-3">
      <li className="whitespace-nowrap rounded-full bg-gray-600 dark:bg-gray-50 px-2.5 py-0.5 text-xs text-gray-100 dark:text-gray-900">Front-end</li>
      <li className="whitespace-nowrap rounded-full bg-gray-600 dark:bg-gray-50 px-2.5 py-0.5 text-xs text-gray-100 dark:text-gray-900">Laravel</li>
      <li className="whitespace-nowrap rounded-full bg-gray-600 dark:bg-gray-50 px-2.5 py-0.5 text-xs text-gray-100 dark:text-gray-900">Express.js</li>
      <li className="whitespace-nowrap rounded-full bg-gray-600 dark:bg-gray-50 px-2.5 py-0.5 text-xs text-gray-100 dark:text-gray-900">Passport.js</li>
     </ul>
 
       <a className="group bg-gray-950 px-4 md:px-7 py-2 md:py-3 flex items-center gap-2 rounded-lg outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 w-min pt-3 "><FaGithub/>WEBSITE</a>
  </div>
   
  <div className="flex flex-col w-80 rounded-lg bg-slate-700 p-3">
     <Image src="/images/vet-one.jpg" width={300} height={300} alt="carpet website" className="rounded-lg "/>
     <h1 className="text-xl p-3">Vet-one</h1>
     <p className="text-gray-300 ">Eleishe is a website that sells carpets. I worked on both the design and functionality of the site, handling both the front and back ends. I also helped with making sure user accounts are secure. This project was my last one at Tuv International.</p>
     <ul className="flex flex-row gap-2 flex-wrap pt-3 pb-3">
      <li className="whitespace-nowrap rounded-full bg-gray-600 dark:bg-gray-50 px-2.5 py-0.5 text-xs text-gray-100 dark:text-gray-900">Front-end</li>
      <li className="whitespace-nowrap rounded-full bg-gray-600 dark:bg-gray-50 px-2.5 py-0.5 text-xs text-gray-100 dark:text-gray-900">Laravel</li>
      <li className="whitespace-nowrap rounded-full bg-gray-600 dark:bg-gray-50 px-2.5 py-0.5 text-xs text-gray-100 dark:text-gray-900">Express.js</li>
      <li className="whitespace-nowrap rounded-full bg-gray-600 dark:bg-gray-50 px-2.5 py-0.5 text-xs text-gray-100 dark:text-gray-900">Passport.js</li>
     </ul>
 
       <a className="group bg-gray-950 px-4 md:px-7 py-2 md:py-3 flex items-center gap-2 rounded-lg outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 w-min pt-3 "><FaGithub/>WEBSITE</a>
  </div>
   
  </div>
 
   
    </>
 )
}

export default Project