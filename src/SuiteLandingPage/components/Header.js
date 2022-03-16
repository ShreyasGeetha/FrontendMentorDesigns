import React from 'react'

import logo from '../assets/logo.svg'

function Header() {
  return (
    <div className='ml-4 mt-6 md:mt-10
    md:max-w-689 md:mx-auto
    xl:mt-13
    xl:max-w-5xl xl:mx-auto
    
    '>
      <div className='flex justify-between '>
        {/* <img src={logo} alt="logo"  className='w-21 h-8 md:w-8'/> */}
        <div className='font-epilogue font-bold text-32 leading-8 tracking-suite text-DarkBlue'>
          suite
        </div>
        <div className='border-DarkBlue border-1 inline-block rounded-md px-4 py-3 font-epilogue font-bold text-sm leading-6 tracking-tightest
        text-DarkBlue'>
          Request Beta Access
        </div>
      </div>      
    </div>
  )
}

export default Header