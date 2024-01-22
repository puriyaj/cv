"use client"
import { motion,useScroll } from "framer-motion"
import Project from "../project"
import { useRef } from "react"


const Projects = () => {
  const ref = useRef<HTMLElement>(null)
  const {scrollYProgress} = useScroll({
    target: ref,
    offset:["0 1", "0.8 1"]
  })
  return(
   <>
    <motion.section ref={ref} style={{scale:scrollYProgress,opacity:scrollYProgress}} id="project" className="flex flex-col justify-center p-5 items-center">

      <p  className="font-roboto text-2xl text-justify  pb-5 text-gray-900 dark:text-gray-50" >My Projects And Certificates</p>
       <Project />
    </motion.section>
    
   </>
  )
}
export default Projects