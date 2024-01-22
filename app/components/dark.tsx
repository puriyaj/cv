'use client'
import React, { useEffect } from 'react'
import {  BsSunFill } from 'react-icons/bs'
import { useTheme } from '../context/theme'
import { FaRegMoon } from 'react-icons/fa'



export default function Dark() {
 const {theme , toggleTheme} = useTheme()
  return (<>
  <button className='fixed bottom-5 right-5 dark:bg-black bg-slate-500 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] rounded-full border border-white border-opacity-40 shadow-2xl flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all' onClick={toggleTheme}>
    {theme === 'light' ? <BsSunFill /> : <FaRegMoon />}
      
    </button>
  </>
    
  )
}
