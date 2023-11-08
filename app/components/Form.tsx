
'use client'
import { Icon } from '@iconify/react';
const Form=() =>{
  return(<>

  <div className="flex flex-row justify-center gap-6 ">
  <Icon className='h-12 w-12 pb-2' icon="icon-park:github" onClick={() => window.open('https://github.com/puriyaj')}/>
<div onClick={() => window.open('https://github.com/puriyaj')} className=" w-10 h-10 rounded-full bg-white hover:stroke-black">

  <p  onClick={() => window.open('https://github.com/puriyaj/cv/blob/main/cv.pdf')} className="text-creme flex justify-center items-center pt-2">CV</p>

</div>

 <Icon className='h-12 w-12 pb-2' icon="logos:whatsapp-icon"  onClick={() => window.open('https://wa.me/15783701320')} />
</div>





  </>
)};
export default Form;
