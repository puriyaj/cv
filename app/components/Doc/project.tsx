"use client";
import { motion, useScroll } from "framer-motion";
import Project from "../project";
import { useRef } from "react";

const Projects = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.5 1"],
  });
  return (
    <>
      <motion.section
        ref={ref}
        style={{ scale: scrollYProgress, opacity: scrollYProgress }}
        id="project"
        className="md:flex flex-col justify-center p-5 items-center hidden "
      >
        <p className="font-roboto text-2xl text-justify  py-10 text-gray-900 dark:text-gray-50 ">
          My Projects And Certificates
        </p>
        <Project />
      </motion.section>
      <div className="flex md:hidden">
        <Project />
      </div>
    </>
  );
};
export default Projects;
