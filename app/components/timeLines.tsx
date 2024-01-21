'use client'
import React, { useContext } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '../lib/data';
import { useInView } from "react-intersection-observer";
import { useTheme } from '../context/theme';

export default function Ex() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const {theme} = useTheme()
  return (
    <section ref={ref} id='experience'>
      <div className='flex justify-center'>
        <p className="font-roboto text-2xl text-justify pt-11 pb-5 ">Experience and Education</p>
      </div>
      
      <VerticalTimeline lineColor='rgba(255,255,255,0.5)'>
        {
          experiencesData.map((item,index) => (<React.Fragment key={index}>
            <VerticalTimelineElement visible={inView} contentStyle={{
            background:
              theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
            boxShadow: "none",
            border: "1px solid rgba(0, 0, 0, 0.05)",
            textAlign: "left",
            padding: "1.3rem 2rem",
          }}
          contentArrowStyle={{
            borderRight:
              theme === "light"
                ? "0.4rem solid #9ca3af"
                : "0.4rem solid rgba(255, 255, 255, 0.5)",
          }}
          date={item.date}
          icon={item.icon}
          iconStyle={{
            background:
              theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
            fontSize: "1.5rem",
          }}
        >
          <h3 className='text-gray-700 dark:text-white/75'>{item.title}</h3>
          <p className='text-gray-700 dark:text-white/75'>{item.location}</p>
          <p className='text-gray-700 dark:text-white/75'>{item.description
          }</p>
          </VerticalTimelineElement>
            </React.Fragment>))
        }
      </VerticalTimeline>
    </section>
  )
}
