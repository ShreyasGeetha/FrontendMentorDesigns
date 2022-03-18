import React from 'react'



import Stats from './Stats'
import HeroImage from './HeroImage'
import RequestButton from './RequestButton'
import Description from './Description'
import HeroTitle from './HeroTitle'
import CurveTopImg from './CurveTopImg'

const Hero = () => {
  return (
    <div className='mx-4 my-20 max-w-2xl md:max-w-6xl  md:mx-10 xl:max-w-6xl xl:mx-auto '>      
      <div className='flex flex-col xl:flex-row md:relative  '>
        <div className='min-w-fit md:z-10 md:h-482 md:mt-10 '>
          <CurveTopImg />
          <HeroTitle />
          <Description />
          <RequestButton /> 
        </div>
        
        {/* Hero images */}
        <HeroImage />
      
        {/* statistics */}
        <Stats />    
      </div>      
    </div>
  )
}

export default Hero