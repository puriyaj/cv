//import { readFile } from "fs/promises"
//import { marked } from "marked"
//       <article dangerouslySetInnerHTML={{__html:html}} className=" font-roboto text-xl text-justify italic pb-3 text-gray-700 dark:text-gray-50"/>





export default async function About() {
//  const text = await readFile('app/content/front.md','utf8')
//const html = marked(text)
  return(<>
  <div id="About" className="flex flex-col items-center p-5">
     <div className="w-1 h-10 bg-black rounded-full"></div>
       <p className="font-roboto text-2xl text-justify  pt-11 pb-5 text-gray-700 dark:text-gray-50">About me</p>
       <p className="md:w-[50rem] font-roboto text-xl text-center italic pb-3 text-gray-700 dark:text-gray-50">
         With over 5 years of experience, I build high-quality software solutions with a strong focus on creating engaging user interfaces. I have a deep knowledge of deep learning and machine learning, leveraging tools such as TensorFlow, OpenCV, Pandas, and Matplotlib, and writing code in C++ for enhanced training in machine learning. Proficient in front-end technologies like React, Next.js, TypeScript, and JavaScript, I excel in writing clean, responsive code and implementing dynamic features. I also bring expertise in testing with Jest.js and styling with Sass and Tailwind CSS, ensuring robust and visually appealing applications.
       </p>
       
  </div>
 
</>)
}

