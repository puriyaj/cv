import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx,html,mdx}',
    './components/**/*.{js,ts,jsx,tsx,html,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx,html}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'photo': 'url("../public/images/3.jpg")',
     
        
      },
      
      fontFamily:{
        roboto:['var(--font-roboto)','sans-serif'],
        edu:['var(--font-edu)','sans-serif']
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
  darkMode:'class'
}
export default config
