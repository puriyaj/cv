import Me from "./components/Doc/me"
import About from "./components/Doc/About"
import Con from "./components/Doc/contact"
import Skill from "./components/Doc/skills"
import Projects from "./components/Doc/project"
import Ex from "./components/Doc/experience"
import NavBar from "./components/NavBar"



export default function Homes() {
  
  return (<>
  
<div className="flex flex-col  bg-slate-900 pb-10 p-5 ">

<Me/>
<About/>
<Projects/>
<Skill/>    
<Ex/>
<Con/>      

      
      
    

  </div>









    
 




 


  </>

  )
}
