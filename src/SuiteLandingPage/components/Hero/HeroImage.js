import React from 'react'

import heroTablet from '../../assets/heroTablet.png'
import heroPhone from '../../assets/heroPhone.png'
const HeroImage = () => {
  return (
    <>
      <div className='mt-14 border-2 md:max-w-xs'>
          <img src={heroPhone} alt="Hero Tablet" className='md:hidden' />
          <img src={heroTablet} alt="Hero Tablet" className='hidden md:block md:self-end md:object-contain ' />
      </div>
    </>
  )
}

export default HeroImage