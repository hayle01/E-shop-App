import React from 'react'
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router'

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-black">
      <div className="w-full md:max-w-4xl mx-auto py-6">
        <div className="md:flex justify-between gap-4">
          <div className="py-6">
            <Link to="/" className="text-white font-bold text-xl">
              E-shop
            </Link>
            <p className="max-w-sm text-[#CFCFCF] mt-4">
              We are a residential interior design firm located in Portland. Our
              boutique-studio offers more than
            </p>
          </div>

          <div className="flex flex-col gap-2 py-6">
            <p className="text-white font-semibold">Services</p>
            <span className="text-[#CFCFCF] cursor-pointer hover:text-gray-500">Bonus Program</span>
            <span className="text-[#CFCFCF] cursor-pointer hover:text-gray-500">Gift cards</span>
            <span className="text-[#CFCFCF] cursor-pointer hover:text-gray-500">Credit and payment</span>
            <span className="text-[#CFCFCF] cursor-pointer hover:text-gray-500">Service contracts</span>
            <span className="text-[#CFCFCF] cursor-pointer hover:text-gray-500">Non-cash account</span>
            <span className="text-[#CFCFCF] cursor-pointer hover:text-gray-500">Payment</span>
          </div>

          <div className="flex flex-col gap-2 py-6">
            <p className="text-white font-semibold">Assistance to the buyer</p>
            <span className="text-[#CFCFCF] cursor-pointer hover:text-gray-500">Find an order</span>
            <span className="text-[#CFCFCF] cursor-pointer hover:text-gray-500">Gift cards</span>
            <span className="text-[#CFCFCF] cursor-pointer hover:text-gray-500">Terms of delivery</span>
            <span className="text-[#CFCFCF] cursor-pointer hover:text-gray-500">Exchange and return of goods</span>
            <span className="text-[#CFCFCF] cursor-pointer hover:text-gray-500">Guarantee</span>
            <span className="text-[#CFCFCF] cursor-pointer hover:text-gray-500">Frequently asked questions</span>
            <span className="text-[#CFCFCF] cursor-pointer hover:text-gray-500">Terms of use of the site</span>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-4 py-6">
          <Link to='/'>
          <FaFacebookF color='white' size={20}/>
          </Link>
          <Link to='/'>
          <FaInstagram  color='white' size={20}/>
          </Link>

          <Link to='/'>
          <BsTwitterX color='white' size={20}/>
          </Link>

          <Link to='/'>  
          <FaTiktok color='white' size={20}/>
          </Link>
        </div>
        
        <div className='text-center'>
          <p className='text-gray-300'>E-shop Allright reserved &copy; {currentYear}</p>
        </div>
      </div>
    </div>
  );
}
