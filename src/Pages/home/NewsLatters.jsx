import React from 'react'
import { Link } from 'react-router-dom'

const NewsLatters = () => {
  return (
    <div className='bg-[#1e2832] bg-opacity-5 xl:px-28 px-4 py-16'>
      <h2 className='title mb-8'>
        Follow products and discounts on Instagram
      </h2>
      {/* Insta Grid */}
      <div className='grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-4  mb-20 mx-auto '>
        <Link to="/">
          <img src="/image/Instagram/image1.png" alt="" />
        </Link>
        <Link to="/">
          <img src="/image/Instagram/image2.png" alt="" />
        </Link>
        <Link to="/">
          <img src="/image/Instagram/image3.png" alt="" />
        </Link>
        <Link to="/">
          <img src="/image/Instagram/image4.png" alt="" />
        </Link>
        <Link to="/">
          <img src="/image/Instagram/image5.png" alt="" />
        </Link>
        <Link to="/">
          <img src="/image/Instagram/image6.png" alt="" />
        </Link>
      </div>

      {/* NewsLatters */}
      <div>
        <h2 className='title mb-8 capitalize'>Or subscribe to the newsletters</h2>
        <form action="" className='md:w-1/2 mx-auto text-center'>
          <input type="email" name='email' id='email' placeholder='Email address...' className='h-7 bg-transparent outline-none border-b-2 pl-2 border-Black md:w-2/3 w-full mb-5 placeholder:text-black/50 mr-4 ' />
          <input type="submit" value={"Submit"} name="" id="" className='bg-black text-white px-6 py-1 rounded-sm' />

        </form>
      </div>
    </div>
  )
}

export default NewsLatters