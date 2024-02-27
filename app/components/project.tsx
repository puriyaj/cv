import Image from "next/image"
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa"

const Project = () => {
  return(<>
  <div className="flex flex-row flex-wrap gap-3 justify-center">
  <div className="flex flex-col w-80 rounded-lg  p-3 shadow-2xl bg-slate-100 dark:bg-slate-700">
     <Image src="/images/asb.png" width={300} height={300} alt="asb website" className="rounded-lg "/>
     <h1 className="text-xl p-3">Asb Davani</h1>
     <p className="dark:text-gray-300 text-gray-700">Asbdavani is your go-to destination for live horse competitions and the latest news in the equestrian world. With a user-friendly interface, the platform offers real-time updates on competitions, allowing enthusiasts to experience the thrill from anywhere.</p>
     <ul className="flex flex-row gap-2 flex-wrap pt-3 pb-3">
      <li className="whitespace-nowrap rounded-full bg-gray-600 dark:bg-gray-50 px-2.5 py-0.5 text-xs text-gray-100 dark:text-gray-900">Full-Stack</li>
      <li className="whitespace-nowrap rounded-full bg-gray-600 dark:bg-gray-50 px-2.5 py-0.5 text-xs text-gray-100 dark:text-gray-900">React</li>
      <li className="whitespace-nowrap rounded-full bg-gray-600 dark:bg-gray-50 px-2.5 py-0.5 text-xs text-gray-100 dark:text-gray-900">Nest.js</li>
      <li className="whitespace-nowrap rounded-full bg-gray-600 dark:bg-gray-50 px-2.5 py-0.5 text-xs text-gray-100 dark:text-gray-900">mySQL</li>
     </ul>
 
       <a className="group bg-gray-950 px-4 md:px-7 py-2 md:py-3 flex items-center gap-2 rounded-lg outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 w-min pt-3 text-slate-50" href="https://asbdavani.app"><CgWebsite />WEBSITE</a>


    
  </div>

    <div className="flex flex-col w-80 rounded-lg  p-3 shadow-2xl bg-slate-100 dark:bg-slate-700">
     <Image src="/images/kaufmann.png" width={300} height={300} alt="kaufmann website" className="rounded-lg "/>
     <h1 className="text-xl p-3">Kaufmann</h1>
     <p className="dark:text-gray-300 text-gray-700">Kaufmann platform boasts three dashboards tailored for buyers, sellers, and administrators. Buyers enjoy a seamless shopping experience, sellers efficiently manage products, and admins have control with roll-based functionality.(not complete)</p>
     <ul className="flex flex-row gap-2 flex-wrap pt-3 pb-3">
      <li className="whitespace-nowrap rounded-full bg-gray-600 dark:bg-gray-50 px-2.5 py-0.5 text-xs text-gray-100 dark:text-gray-900">Full-stack</li>
      <li className="whitespace-nowrap rounded-full bg-gray-600 dark:bg-gray-50 px-2.5 py-0.5 text-xs text-gray-100 dark:text-gray-900">Next</li>
      <li className="whitespace-nowrap rounded-full bg-gray-600 dark:bg-gray-50 px-2.5 py-0.5 text-xs text-gray-100 dark:text-gray-900">postgresql</li>
      <li className="whitespace-nowrap rounded-full bg-gray-600 dark:bg-gray-50 px-2.5 py-0.5 text-xs text-gray-100 dark:text-gray-900">tailwind</li>
     </ul>
 
       <a className="group bg-gray-950 px-4 md:px-7 py-2 md:py-3 flex items-center gap-2 rounded-lg outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 w-min pt-3 text-slate-50" href="https://kaufmann-web-app.vercel.app"><CgWebsite />WEBSITE</a>


    
  </div>
   
  <div className="flex flex-col w-80 rounded-lg bg-slate-100 dark:bg-slate-700 p-3">
     <Image src="/images/indie-game.jpg" width={300} height={300} alt="carpet website" className="rounded-lg "/>
     <h1 className="text-xl p-3">Game Reviews</h1>
     <p className="dark:text-gray-300 text-gray-700 ">Eleishe is a website that sells carpets. I worked on both the design and functionality of the site, handling both the front and back ends. I also helped with making sure user accounts are secure. This project was my last one at Tuv International.</p>
     <ul className="flex flex-row gap-2 flex-wrap pt-3 pb-3">
      <li className="whitespace-nowrap rounded-full bg-gray-600 dark:bg-gray-50 px-2.5 py-0.5 text-xs text-gray-100 dark:text-gray-900">Full Stack</li>
      <li className="whitespace-nowrap rounded-full bg-gray-600 dark:bg-gray-50 px-2.5 py-0.5 text-xs text-gray-100 dark:text-gray-900">Next.Js</li>
      <li className="whitespace-nowrap rounded-full bg-gray-600 dark:bg-gray-50 px-2.5 py-0.5 text-xs text-gray-100 dark:text-gray-900">React</li>
      <li className="whitespace-nowrap rounded-full bg-gray-600 dark:bg-gray-50 px-2.5 py-0.5 text-xs text-gray-100 dark:text-gray-900">Tailwind</li>
     </ul>
 
       <a className="group bg-gray-950 px-4 md:px-7 py-2 md:py-3 flex items-center gap-2 rounded-lg outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 w-min pt-3 text-slate-50" href="https://github.com/puriyaj/React_Fullstack-Game-Reviews-"><FaGithub/>REPOSITORIES</a>
  </div>
   
  <div className="flex flex-col w-80 rounded-lg bg-slate-100 dark:bg-slate-700 p-3">
     <Image src="/images/vet-one.jpg" width={300} height={300} alt="carpet website" className="rounded-lg "/>
     <h1 className="text-xl p-3">Vet-one</h1>
     <p className="dark:text-gray-300 text-gray-700 ">Eleishe is a website that sells carpets. I worked on both the design and functionality of the site, handling both the front and back ends. I also helped with making sure user accounts are secure. This project was my last one at Tuv International.</p>
     <ul className="flex flex-row gap-2 flex-wrap pt-3 pb-3">
      <li className="whitespace-nowrap rounded-full bg-gray-600 dark:bg-gray-50 px-2.5 py-0.5 text-xs text-gray-100 dark:text-gray-900">Full Stack</li>
      <li className="whitespace-nowrap rounded-full bg-gray-600 dark:bg-gray-50 px-2.5 py-0.5 text-xs text-gray-100 dark:text-gray-900">SQL</li>
      <li className="whitespace-nowrap rounded-full bg-gray-600 dark:bg-gray-50 px-2.5 py-0.5 text-xs text-gray-100 dark:text-gray-900">Next.js</li>
      <li className="whitespace-nowrap rounded-full bg-gray-600 dark:bg-gray-50 px-2.5 py-0.5 text-xs text-gray-100 dark:text-gray-900">Tailwind</li>
     </ul>
 
       <a className="group bg-gray-950 px-4 md:px-7 py-2 md:py-3 flex items-center gap-2 rounded-lg outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 w-min pt-3 text-slate-50" href="https://vet-one.ir"><CgWebsite />WEBSITE</a>
  </div>
  <div className="flex flex-col w-80 rounded-lg  p-3 shadow-2xl bg-slate-100 dark:bg-slate-700">
     <Image src="/images/carpet.jpg" width={300} height={300} alt="carpet website" className="rounded-lg "/>
     <h1 className="text-xl p-3">Eleishe</h1>
     <p className="dark:text-gray-300 text-gray-700">Eleishe is a website that sells carpets. I worked on both the design and functionality of the site, handling both the front and back ends. I also helped with making sure user accounts are secure. This project was my last one at Tuv International.</p>
     <ul className="flex flex-row gap-2 flex-wrap pt-3 pb-3">
      <li className="whitespace-nowrap rounded-full bg-gray-600 dark:bg-gray-50 px-2.5 py-0.5 text-xs text-gray-100 dark:text-gray-900">Front-end</li>
      <li className="whitespace-nowrap rounded-full bg-gray-600 dark:bg-gray-50 px-2.5 py-0.5 text-xs text-gray-100 dark:text-gray-900">Laravel</li>
      <li className="whitespace-nowrap rounded-full bg-gray-600 dark:bg-gray-50 px-2.5 py-0.5 text-xs text-gray-100 dark:text-gray-900">Express.js</li>
      <li className="whitespace-nowrap rounded-full bg-gray-600 dark:bg-gray-50 px-2.5 py-0.5 text-xs text-gray-100 dark:text-gray-900">Passport.js</li>
     </ul>
 
       <a className="group bg-gray-950 px-4 md:px-7 py-2 md:py-3 flex items-center gap-2 rounded-lg outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 w-min pt-3 text-slate-50" href="https://eleishe.ir"><CgWebsite />WEBSITE</a>


    
  </div>
   
  </div>
 
   
    </>
 )
}

export default Project