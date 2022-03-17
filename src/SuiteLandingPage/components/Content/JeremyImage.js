import React from 'react'

import jeremySmall from '../../assets/jeremySmall.png'

import jeremyDesktop from '../../assets/jeremyDesktop.png'

const JeremyImage = () => {
  return (
    <>
      <div className=''>
        <img src={jeremySmall} alt="jeremySmall" className='xl:hidden my-5 -mt-44 mx-auto ' />

        <img src={jeremyDesktop} alt="jeremySmall" className='hidden xl:block my-5 -mt-9 ml-28 mx-auto w-96 h-600 object-contain' />
      </div>

    </>
  )
}

export default JeremyImage