import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa6'
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer>

      {/* Footer-Top */}
      <div className='max-w-screen-2xl mx-auto container xl:px-28 px-4 '>
        <div className='mt-20 mb-10 flex flex-col text-center md:flex-row items-center lg:items-start lg:justify-between gap-8 '>
          {/* Company Info */}
          <div className='md:w-[400px] '>
            <Link to="/">
              <img src="/logo.png" className="inline-flex" alt="" />
            </Link>
            <p className='my-8 text-black/75'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, dolore?
            </p>
            <div className='flex items-center justify-center gap-6'>
              <FaFacebook className='w-5 h-5 cursor-pointer hover:text-orange-500' />
              <FaTwitter className='w-5 h-5 cursor-pointer hover:text-orange-500' />
              <FaLinkedinIn className='w-5 h-5 cursor-pointer hover:text-orange-500' />
              <FaInstagram className='w-5 h-5 cursor-pointer hover:text-orange-500' />
            </div>
          </div>
          {/* Catalog */}
          <div className='text-Black'>
            <h4 className='font-semibold mb-3'>CATALOG</h4>
            <div className='space-y-2'>
              <Link to="/" className='text-sm block hover:text-orange-500'>
                Necklaces
              </Link>
              <Link to="/" className='text-sm block hover:text-orange-500'>
                Hoodies
              </Link>
              <Link to="/" className='text-sm block hover:text-orange-500'>
                Jewelry Box
              </Link>
              <Link to="/" className='text-sm block hover:text-orange-500'>
                T-shirt
              </Link>
              <Link to="/" className='text-sm block hover:text-orange-500'>
                Jacket
              </Link>
            </div>
          </div>

          {/* Abot Us */}
          <div className='text-Black'>
            <h4 className='font-semibold mb-3 '>
              About Us
            </h4>
            <div className='space-y-2'>
              <Link to="/" className='text-sm block hover:text-orange-500'>
                Our Producers
              </Link>
              <Link to="/" className='text-sm block hover:text-orange-500'>
                Sitemap
              </Link>
              <Link to="/" className='text-sm block hover:text-orange-500'>
                FAQ
              </Link>
              <Link to="/" className='text-sm block hover:text-orange-500'>
                About Us
              </Link>
              <Link to="/" className='text-sm block hover:text-orange-500'>
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div className='text-Black'>
            <h4 className='font-semibold mb-3 '>
              CUSTOMER SERVICES
            </h4>
            <div className='space-y-2'>
              <Link to="/" className='text-sm block hover:text-orange-500'>
                Contact Us
              </Link>
              <Link to="/" className='text-sm block hover:text-orange-500'>
                Track Your Order
              </Link>
              <Link to="/" className='text-sm block hover:text-orange-500'>
                Product Care & Repair
              </Link>
              <Link to="/" className='text-sm block hover:text-orange-500'>
                Book an Appointment
              </Link>
              <Link to="/" className='text-sm block hover:text-orange-500'>
                Shipping & Returns
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Footer- Bottom */}
      <div className="bg-Black ">
        <p className="text-white text-center items-center py-3">© {currentYear} Designed By BIKASH. </p>
      </div>
    </footer >
  )
}

export default Footer