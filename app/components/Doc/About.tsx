import { readFile } from "fs/promises"
import { marked } from "marked"






export default async function About() {
  const text = await readFile('app/content/front.md','utf8')
const html = marked(text)
  return(<>
  <div id="About" className="flex flex-col items-center p-5">
     <div className="w-1 h-10 bg-black rounded-full"></div>
       <p className="font-roboto text-2xl text-justify  pt-11 pb-5">About me</p>
       <article dangerouslySetInnerHTML={{__html:html}} className=" font-roboto text-xl text-justify italic pb-3"/>
       
  </div>
 
</>)
}

