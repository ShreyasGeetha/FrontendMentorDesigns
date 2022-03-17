import React from 'react'
import Footer from '../Footer/Footer'


import CurveBottomImage from './CurveBottomImage'
import Description from './Description'
import JeremyImage from './JeremyImage'
import Name from './Name'
import Title from './Title'

const MainContent = () => {
  return (
    <div className='border-5 border-red-600 bg-red-500'>
      
      <div className='xl:relative border-4 border-cyan-500 xl:mt-60 absolute'>
        {/* Footer Cream */}
        <div className=' xl:max-w-8xl xl:mx-auto xl:h-482 xl:mt-60 bg-cream xl:-z-20'>
        </div>

        <div className='flex flex-col items-center content-center bg-DarkBlue  mt-64 rounded-2xl
      md:w-full md:mx-auto xl:max-w-5xl xl:h-545 xl:mx-auto  xl:z-10 xl:flex-row xl:my-0 xl:justify-between xl:absolute'>
          <JeremyImage />
          <CurveBottomImage />
          <div className='xl:flex xl:flex-col xl:items-start xl:content-start  xl:w-82  xl:mx-auto'>
            <Title />
            <Description />
            <Name />
          </div>     
        </div>
      </div>


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
    </div>
  )
}

export default MainContent