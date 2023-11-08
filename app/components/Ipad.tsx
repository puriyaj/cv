import Image from "next/image"
import Link from "next/link"

const Ipad = () => {
  return(<>


   <div className="bg-creme grid grid-cols-2 pr-3">
    
<Image className="pb-10 " src="/images/mtn.png" width="400" height="400" alt="projects photo"/>
<div className="justify-self-end">
<Link href="/projects">
<Image className="pb-10 rounded-lg hover:skew-y-12 " src="/images/ipad.png" width="400" height="400" alt="projects photo"/>

</Link>
</div>

   
</div> 
    </>
 )
}

export default Ipad