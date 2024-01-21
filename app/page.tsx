import Me from "./components/Doc/me"
import About from "./components/Doc/About"
import Con from "./components/Doc/contact"
import Skill from "./components/Doc/skills"
import Projects from "./components/Doc/project"
import Ex from "./components/timeLines"



export default function Homes() {

  return (<>
  
<div className="flex flex-col  pb-10 p-5 ">

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
