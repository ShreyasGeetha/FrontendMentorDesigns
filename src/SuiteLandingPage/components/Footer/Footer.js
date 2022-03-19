import React from 'react'
import SocialNetworking from '../Content/SocialNetworking'


const Footer = () => {
  return (
    <div className='text-white left-0 bottom-16 md:bottom-20 xl:bottom-14 absolute flex md:flex-row flex-col items-center content-center justify-between xl:max-w-8xl xl:w-5xl xl:mx-40 
       md:max-w-5xlp md:mx-10 sm:right-0 sm:h-39 md:h-auto'>
      <div className='font-epilogue text-DarkBlue font-bold text-32 leading-8 tracking-suite'>
        suite
      </div>
        <div className='font-epilogue font-normal text-15 text-DarkBlue'>
          Copyright - Suite
        </div>
        <div className=''>
          <SocialNetworking />
      </div>        
     </div>
  )
}

export default Footer