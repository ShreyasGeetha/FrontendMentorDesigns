import React from 'react'

import curveTop from '../../assets/curveTop.svg'

const CurveTopImg = () => {
  return (
    <div className=''>
      <img className='my-2 
          w-151 h-19
          xl:w-72 xl:h-9 xl:mx-0
          xl:ml-auto xl:mr-9
          md:w-56 md:h-7  md:mx-auto 
          ml-155  mr-53 stroke-white ' src={curveTop} alt="curveTop" />
    </div>
  )
}

export default CurveTopImg