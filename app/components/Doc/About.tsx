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
       <p className=" font-roboto text-xl text-justify italic pb-3 text-gray-700 dark:text-gray-50">Fullstack developer with experience of working on a variety of web projects including eCommerce, company websites and some experience in data analysis.
Well-versed in technology and writing code to create systems that
are reliable and user-friendly</p>
       
  </div>
 
</>)
}

