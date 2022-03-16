import React from 'react'

import heroTablet from '../../assets/heroTablet.png'
import heroPhone from '../../assets/heroPhone.png'
import heroDesktop from '../../assets/heroDesktop.png'
const HeroImage = () => {
  return (
    <>
      <div className='mt-14  
      md:absolute 
      md:right-0 md:-my-0 md:z-0
      xl:max-w-full xl:h-full xl:ml-90 xl:-my-10  xl:left-16 '>
          
        <img src={heroPhone} alt="Hero Tablet" className='md:hidden' />
          
        <img src={heroTablet} alt="Hero Tablet" className='hidden   md:block xl:hidden md:self-end md:object-contain md:w-281 md:h-482  ' />
          
        <img src={heroDesktop} alt="Hero Tablet" className='hidden  xl:block xl:w-96 xl:object-contain xl:h-600  ' />
      </div>
    </>
  )
}

export default HeroImage