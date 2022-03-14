import React from 'react'

import curveTop from '../../assets/curveTop.svg'
import heroTablet from '../../assets/heroTablet.png'

const Hero = () => {
  return (
    <div className='mx-4 my-20 max-w-sm'>      
      <div className='flex flex-col'>
        <img className='my-2 w-151 h-19 ml-155  mr-53 stroke-white ' src={curveTop} alt="curveTop" />
        <div className='text-38  font-epilogue font-normal text-DarkBlue'>
        A <span className='font-bold'>super solution </span>
for your <span className='font-bold'>business.</span>
        </div>

        <div className='my-8 font-epilogue font-normal text-base leading-7 tracking-pointZNine'>
          Our marketing and sales automations help you scale your outreach to get more leads for your company.
        </div>

        <div className=''>
          <button className=' bg-DarkBlue text-creamWhite px-8 py-4 rounded-md '>Request Beta Access</button>
        </div>   
        
      </div>      

      <div className='mt-14'>
        <img src={heroTablet} alt="Hero Tablet" className='' />

        {/* statistics */}
        <div>
          {/* 2k companies */}
          <div>

          </div>

          {/* 8 languages */}
          <div>

          </div>

          {/* 1.2M Leads */}
          <div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero