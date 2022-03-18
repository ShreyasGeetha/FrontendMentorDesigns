import React from 'react'
import SocialNetworking from '../Content/SocialNetworking'


const Footer = () => {
  return (
    <div className='text-white left-0 md:bottom-4 xl:bottom-0 absolute flex md:flex-row flex-col items-center content-center justify-between bottom-10 h-39 mx-auto md:max-w-8xl md:m-0 md:mx-20 xl:w-5xl xl:mx-40 '>
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