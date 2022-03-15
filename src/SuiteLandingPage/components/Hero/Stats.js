import React from 'react'

const Stats = () => {
  return (
    <>
      <div className='mt-14 border-2 text-center
        md:flex  md:justify-around
        xl:block xl:text-left'>
          {/* 2k companies */}
          <div className=''>
            <div className='font-epilogue font-bold text-5xl leading-56 text-DarkBlue'>
              2K+
            </div>
            <div className='font-epilogue font-normal text-base tracking-ultraWide text-grey'>
              COMPANIES
            </div>
          </div>

          {/* 8 languages */}
          <div className='my-8 md:my-0'>
            <div className='font-epilogue font-bold text-5xl leading-56 text-DarkBlue'>
              8
            </div>
            <div className='font-epilogue font-normal text-base tracking-ultraWide text-grey'>
              LANGUAGES
            </div>
          </div>

          {/* 1.2M Leads */}
          <div className=''>
            <div className='font-epilogue font-bold text-5xl leading-56 text-DarkBlue'>
              1.2M
            </div>
            <div className='font-epilogue font-normal text-base tracking-ultraWide text-grey'>
              LEADS
            </div>
          </div>
        </div>  
      </>
  )
}

export default Stats;