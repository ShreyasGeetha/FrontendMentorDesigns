import React from 'react'

import curveTop from '../../assets/curveTop.svg'

const CurveTopImg = () => {
  return (
    <div>
      <img className='my-2 
          w-151 h-19
          md:w-56 md:h-7 md:border-1 md:mx-auto md:border-red-300
          ml-155  mr-53 stroke-white ' src={curveTop} alt="curveTop" />
    </div>
  )
}

export default CurveTopImg