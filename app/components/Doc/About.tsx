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
       Front-end developer with 5+ years of experience specializing in React and Next.js. Skilled in testing with Jest.js, I prioritize writing clean and responsive UI code. Proficient in TypeScript and JavaScript, with a strong foundation in SQL databases. Experienced in fetching data from REST APIs and GraphQL endpoints. Passionate about building dynamic webpages and implementing captivating animations. Proficient in Sass and Tailwind CSS for efficient styling and layout design.
       </p>
       
  </div>
 
</>)
}

