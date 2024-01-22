import type { Metadata } from 'next'
import { roboto,edu} from './fonts'
import './globals.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Dark from './components/dark'
import ThemeContextProvider from './context/theme'



export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`!scroll-smooth ${roboto.variable,edu.variable}`}>
     
      <body className='bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 relative'>
         
      <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
       
       <header >
         <NavBar/>
        </header>
 
        
        
       <ThemeContextProvider>
        <div className="grow m-0">
<main >{children}</main>

</div>
   

        
  <Footer/>
  <Dark/> 
</ThemeContextProvider>
      </body>

    </html>
  )
}
