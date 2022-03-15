import React from 'react'



import Stats from './Stats'
import HeroImage from './HeroImage'
import RequestButton from './RequestButton'
import Description from './Description'
import HeroTitle from './HeroTitle'
import CurveTopImg from './CurveTopImg'

const Hero = () => {
  return (
    <div className='mx-4 my-20 max-w-2xl md:max-w-3xl'>      
      <div className='flex flex-col '>
        <div className='min-w-fit'>
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