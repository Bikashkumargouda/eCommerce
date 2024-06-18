import React from 'react'

const Collections = () => {
  return (
    <div className='sm:bg-[url("/image/bg.png")]  bg-cover bg-center  bg-no-repeat xl:px-28 px-4 my-20 relative bg-Black'>
      <div className='h-[580px] flex justify-between md:flex-row items-center'>
        <div className='md:w-1/2 '>
          <img src="/image/ZaraSm.png " className='absolute top-0 right-0 p-2' alt="" />
        </div>
        <div className='md:w-1/2 sm:px-10 px-0'>
          <img src="/image/ZaraLg.png" alt="" />
          <p className='text-lg text-white capitalize my-8 md:w-2/3 leading-[32px]'>
            Lustrous yet understated. The new evening
            wear collection exclusively offered at the
            reopened Giorgio Armani boutique in Los
            Angeles.
          </p>
          <button className='px-6 py-2 bg-white text-Black rounded-sm font-semibold'>See Collections</button>
        </div>
      </div>
    </div>
  )
}

export default Collections