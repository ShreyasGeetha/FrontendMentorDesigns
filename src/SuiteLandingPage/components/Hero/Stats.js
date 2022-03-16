import React from 'react'

const Stats = () => {
  return (
    <>
      <div className='mt-14 text-center
        md:flex  md:justify-evenly
        md:mt-20
        xl:flex-col xl:absolute xl:right-0 xl:m-0 xl:h-full xl:mr-16 
        '>
          {/* 2k companies */}
          <div className='xl:text-left'>
            <div className='font-epilogue font-bold text-5xl leading-56 text-DarkBlue'>
              2K+
            </div>
            <div className='font-epilogue font-normal text-base xl:leading-6 tracking-ultraWide text-grey'>
              COMPANIES
            </div>
          </div>

          {/* 8 languages */}
          <div className='my-8 md:my-0 xl:text-left'>
            <div className='font-epilogue font-bold text-5xl leading-56 text-DarkBlue'>
              8
            </div>
            <div className='font-epilogue font-normal text-base xl:leading-6 tracking-ultraWide text-grey'>
              LANGUAGES
            </div>
          </div>

          {/* 1.2M Leads */}
          <div className='xl:text-left'>
            <div className='font-epilogue font-bold text-5xl leading-56 text-DarkBlue'>
              1.2M
            </div>
            <div className='font-epilogue font-normal text-base xl:leading-6 tracking-ultraWide text-grey'>
              LEADS
            </div>
          </div>
        </div>  
      </>
  )
}

export default Stats;