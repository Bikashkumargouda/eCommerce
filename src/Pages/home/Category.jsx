import React from 'react'
import { Link } from 'react-router-dom'
const companylogo = [
  {
    id: 1,
    img: "/image/Company/Brand1.png",
  },
  {
    id: 2,
    img: "/image/Company/Brand2.png",
  },
  {
    id: 3,
    img: "/image/Company/Brand3.png",
  },
  {
    id: 4,
    img: "/image/Company/Brand4.png",
  },
  {
    id: 5,
    img: "/image/Company/Brand5.png",
  }
]

const Category = () => {
  return (
    <div className='max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28'>
      {/* Brand Logo */}
      <div className='flex flex-wrap items-center justify-center gap-4 py-5'>
        {companylogo.map(({ id, img }) => {
          return (
            <div key={id}>
              <img src={img} alt='Brandlogo' />
            </div>
          )
        })}
      </div>
      {/* Category grid */}
      <div className='mt-8 flex flex-col md:flex-row items-center gap-4'>
        <p className='font-semibold md:-rotate-90 uppercase text-center bg-Black text-white md:p-1.5 p-2 rounded-sm inline-flex'>Explore new and popular styles</p>
        <div>
          <Link to="/"><img src="/image/Category/image1.png" alt="" className='w-fll hover:scale-105 transition-all duration-200' /></Link>
        </div>
        <div className='md:w-1/2'>
          <div className='grid grid-cols-2 gap-4'>
            <Link to="/"><img src="/image/Category/image2.png" alt="" className='w-fll hover:scale-105 transition-all duration-200' /></Link>
            <Link to="/"><img src="/image/Category/image3.png" alt="" className='w-fll hover:scale-105 transition-all duration-200' /></Link>
            <Link to="/"><img src="/image/Category/image4.png" alt="" className='w-fll hover:scale-105 transition-all duration-200' /></Link>
            <Link to="/"><img src="/image/Category/image5.png" alt="" className='w-fll hover:scale-105 transition-all duration-200' /></Link>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Category