
'use client'

import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithub, FaWhatsapp } from 'react-icons/fa';
const Form=() =>{
  return(<>

  <div className="flex flex-row justify-center gap-3 w-full pt-3 pb-11 ">
    <a className="group bg-gray-950 px-4 md:px-7 py-2 md:py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 text-slate-50" href='#contact'>Contact me<BsArrowRight/></a>
    <a className="group bg-gray-950 px-4 md:px-7 py-2 md:py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 text-slate-50" href='/Pouria-Jangjooymehrangiz.pdf'>Download CV<HiDownload/></a>
    <a className="min-h-[44px] min-w-[44px] text-2xl rounded-full bg-gradient-to-r from-gray-950  to-gray-500 flex justify-center items-center hover:scale-110" onClick={() => window.open('https://github.com/puriyaj')}>
      <FaGithub/>
    </a>
    <a className="min-h-[44px] min-w-[44px] text-2xl rounded-full bg-gradient-to-r from-green-950  to-green-500 flex justify-center items-center hover:scale-110" onClick={() => window.open('https://wa.me/15783701320')}>
      <FaWhatsapp/>
    </a>
    <a className="min-h-[44px] min-w-[44px] text-2xl rounded-full bg-gradient-to-r from-blue-950  to-blue-500 flex justify-center items-center hover:scale-110" onClick={() => window.open('https://linkedin.com/in/puriya-jangjooymehrangiz')}>
      <BsLinkedin/>
    </a>



</div>

 






  </>
)};
export default Form;
