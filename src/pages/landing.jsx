import React from 'react'
import Navbar from '../components/navbar';
import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';
import { images } from '../assets';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'

const landing = () => {
  return (
    <section className='min-h-screen lg:max-h-screen py-5 lg:py-0 bg-black mx-auto px-4 lg:px-0 container'>
      <div>
        <Navbar />
      </div>
      <div className='p-4'>
        <div className="flex flex-col lg:flex-row gap-x-2 font-mono ">
          <div className="bg-gray-200 border-2 p-4 rounded-lg mb-2 lg:flex-1 min-h-[600px] lg:max-h-[600px] flex items-center relative"> 
            <div className='lg:ml-5 '>
              <h1 className='text-5xl font-bold max-w-[600px]'>Explore the depths of our solar system.</h1>
              <p className='mt-10 max-w-[600px] font-semibold text-lg'>
                From the scorching plains of Mercury to the icy expanse of Neptune, embark on a celestial journey through planetary wonders.
              </p>
              <div className='mt-10'>
                <Link to="/table" className='border-black bg-black border-2 rounded-full font-semibold px-5 py-2 mb-10 hover:bg-gray-200 hover:text-black duration-500 transition-all text-white'>
                  View Planets
                </Link>
                <div className=' text-2xl absolute bottom-0 right-0 flex space-x-2 py-4 px-3 items-center '>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='hover:text-gray-700 transition-all duration-200'>
                    <FaTwitter />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='hover:text-gray-700 transition-all duration-200'>
                    <FaInstagram />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='hover:text-gray-700 transition-all duration-200'>
                    <FaFacebook />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className=" group text-white bg-hero border-2 border-gray-300 transition-all duration-500 p-4 rounded-lg mb-2 lg:flex-1 cursor-pointer max-h-[600px]">
            <Spline className='min-w-[100px]' scene="https://prod.spline.design/CdRIwPxWnD9C9x9O/scene.splinecode" />
            <div className='flex justify-center items-end'>
              <button className="hidden opacity-80 hover:opacity-100 absolute group-hover:block bg-gray-800 px-4 py-2 rounded-full mb-1">View Earth</button>
            </div>
          </div>
        </div>
        <div className="lg:flex gap-x-2">
          <div className="border-2 bg-black text-white  px-0 py-6 lg:p-6 rounded-lg mb-2 lg:w-1/3 font-mono flex justify-center items-center">
            <div className='text-left'>
              <h1 className='mt-4 ml-5 text-3xl font-semibold'>Did you know?</h1>
              <p className='mt-4 font-medium ml-5 mb-2'>
                The largest volcano in the solar system is Olympus Mons, located on Mars. It's 13.6 miles high, making it nearly three times the height of Mount Everest.
              </p>
            </div>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg mb-2 lg:w-1/3 font-mono ">
            <div className='flex mt-5'>
              <img src={images.nye} className='object-cover w-16 h-16 rounded-full' alt="Bill Nye" />
              <div className="flex justify-center items-center px-2">
                <div className=' border-black  border-2 rounded-full  text-center px-5 whitespace-nowrap py-2 font-semibold'>Bill Nye says...</div>
              </div>
            </div>
            <div className='border-b border-black border-2 mt-4'></div>
            <p className='mt-4 font-medium mb-2 '>"The more you find out about the world, the more opportunities there are to laugh at it."</p>
          </div>
          <div className="bg-yellow-300 p-4 rounded-lg mb-2 lg:w-1/3 font-mono flex flex-col justify-center items-center ">
            <h1 className='text-3xl font-semibold mt-4 text-center'>Sign up to our newsletter!</h1>
            <div className='flex flex-col justify-center items-center mt-8'>
              <form className="w-full max-w-md flex justify-center items-center" >
                <input
                  className="appearance-none bg-gray-200 rounded-full text-center px-4 py-2 lg:min-w-[350px] leading-tight focus:outline-none"
                  type="email"
                  placeholder="Email Address"
                />
              </form>
            </div>
            <div className='flex justify-center items-center mt-4'>
              <button className='bg-black text-white hover:bg-yellow-300 hover:text-black border-2 border-black duration-500 transition-all rounded-full px-4 py-1 mt-4 mb-4'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default landing