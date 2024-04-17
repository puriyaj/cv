"use client";
import IconHorizontal from "../IconHorizontal";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
const Skill = () => {
  // const x = useMotionValue(0)
  // const y = useMotionValue(0)

  // const mouseXspring = useSpring(x)
  // const mouseYspring = useSpring(y)

  // const rotateX = useTransform(mouseYspring,[-0.5 , 0.5],["17.5deg", "-17.5deg"])
  // const rotateY = useTransform(mouseXspring,[-0.5 , 0.5],["-17.5deg", "17.5deg"])
  // const handleMouse = (event: React.MouseEvent<HTMLElement> ):void => {
  // const rect  = event.currentTarget.getBoundingClientRect();

  // const width = rect.width
  // const height = rect.height

  // const mx = event.clientX - rect.left;
  // const my = event.clientX - rect.top;

  // const xP = mx/width - 0.5
  // const yP = my/height - 0.5
  // x.set(xP)
  // y.set(yP)
  // }
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
        id="skill"
        className="flex flex-col items-center pb-10"
      >
        <p className="font-roboto text-2xl text-justify pt-11 pb-5 text-gray-700 dark:text-gray-50">
          My Skill
        </p>

        {/* style={{rotateX,rotateY}}
onMouseMove={handleMouse}
onMouseLeave={() => {x.set(0); y.set(0);}} */}
        <IconHorizontal />
      </motion.section>
    </>
  );
};

export default Skill;
