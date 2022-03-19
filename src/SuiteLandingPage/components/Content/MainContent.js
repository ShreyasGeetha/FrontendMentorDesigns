import React from 'react'
import Footer from '../Footer/Footer'


import CurveBottomImage from './CurveBottomImage'
import Description from './Description'
import JeremyImage from './JeremyImage'
import Name from './Name'
import SocialNetworking from './SocialNetworking'
import Title from './Title'

const MainContent = () => {
  return (
    <div className='bg-cream
    md:w-full md:h-640  w-full sm:h-545
    xl:w-6xl
    xl:mx-auto xl:h-100 md:mt-100 mt-120  relative'>
      
      {/* Footer */}
      <Footer />
      

      {/* main content */}
      <div className='bg-DarkBlue xl:w-5xl xl:h-545 xl:-mt-60 xl:mx-40 absolute  
      md:-mt-60 -mt-100 md:mx-10  md:max-w-8xl md:h-684
       rounded-2xl flex flex-col items-center content-center xl:flex-row  xl:justify-between'>
        <div className='bg-purple 
        w-24 h-24 sm:top-24 sm:left-32 md:top-0 md:left-56 
        md:w-49 md:h-49 xl:w-73 xl:bottom-10 xl:top-52 xl:left-36 xl:h-73  blur-xl opacity-48   absolute z-10' />

        <JeremyImage />
        <CurveBottomImage />
        <div className='xl:flex xl:flex-col xl:items-start xl:content-start  xl:w-82  xl:mx-auto'>
          <Title />
          <Description />
          <Name />
        </div>  
      </div>
      
    </div>
  )
}

export default MainContent
{/* <div className='flex flex-col items-center content-center bg-DarkBlue  mt-64 rounded-2xl
      md:w-full md:mx-auto
      xl:w-5xl xl:h-545 xl:flex-row xl:justify-between'>
        
        <JeremyImage />
        <CurveBottomImage />
        <div className='xl:flex xl:flex-col xl:items-start xl:content-start  xl:w-82  xl:mx-auto'>
          <Title />
          <Description />
          <Name />
        </div>      
      </div> */}