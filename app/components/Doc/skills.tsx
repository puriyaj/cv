"use client"
import IconHorizontal from "../IconHorizontal"
import { useRef } from "react"
import { motion,useScroll } from "framer-motion" 
const Skill = () => {
  const ref = useRef<HTMLElement>(null)
  const {scrollYProgress} = useScroll({
    target: ref,
    offset:["0 1", "1.33 1"]
  })
  return(
    <>
    <motion.section ref={ref} style={{scale:scrollYProgress,opacity:scrollYProgress}} id="skill" className="flex flex-col items-center pb-10">
    <p className="font-roboto text-2xl text-justify pt-11 pb-5 text-gray-700 dark:text-gray-50">My Skill</p>

<IconHorizontal/>

    </motion.section>
 
    </>
  )
}

export default Skill