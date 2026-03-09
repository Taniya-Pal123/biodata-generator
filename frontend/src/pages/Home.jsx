import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='min-h-screen flex flex-col'>

      <Navbar/>

      {/* Hero Section */}
      <div className='flex-1 flex  flex-col items-center justify-center px-4 py-14 bg-[#f8f1f1]'>
        <div className='text-center max-w-2xl'>

          {/* Top Tag */}
          <div className='inline-block bg-pink-100 text-[#981b34] text-sm font-semibold px-5 py-2 rounded-full mb-6'>
            Marriage Biodata Made Simple
          </div>

          {/* Heading */}
          <h1 className='font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-none mb-6 text-[#2f211d]'>
            Create Your Perfect <br/>
            <span className='text-[#981b34]'>Marriage Biodata</span>
          </h1>

          {/* Description */}
          <p className='text-gray-600 text-lg mb-8 max-w-lg mx-auto'>
            Beautiful templates, instant preview, and easy sharing. Create a stunning biodata in minutes.
          </p>

          {/* Buttons */}
          <div className='flex justify-center gap-4 flex-col sm:flex-row mb-14'>

            <Link
              to="/register"
              className='bg-[#981b34] text-white px-6 py-3 rounded-lg font-medium hover:bg-red-900 hover:scale-105 transition-transform'
            >
              Create Your Biodata
            </Link>

            <Link
              to="/login"
              className='border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-yellow-600 hover:scale-105 transition-transform'
            >
              Sign In
            </Link>

          </div>

        </div>

        {/* Feature Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full'>

          {/* Card 1 */}
          <div className='border border-gray-200 rounded-xl p-6 text-center bg-white hover:shadow-md transition'>
            <div className='text-3xl mb-3 text-[#981b34]'>📄</div>
            <h3 className='font-semibold text-[#2f211d] text-lg mb-2'>Easy Form</h3>
            <p className='text-gray-500 text-sm'>
              Fill details step by step
            </p>
          </div>

          {/* Card 2 */}
          <div className='border border-gray-200 rounded-xl p-6 text-center bg-white hover:shadow-md transition'>
            <div className='text-3xl mb-3 text-[#981b34]'>🎨</div>
            <h3 className='font-semibold text-[#2f211d] text-lg mb-2'>2 Templates</h3>
            <p className='text-gray-500 text-sm'>
              Modern & Traditional styles
            </p>
          </div>

          {/* Card 3 */}
          <div className='border border-gray-200 rounded-xl p-6 text-center bg-white hover:shadow-md transition'>
            <div className='text-3xl mb-3 text-[#981b34]'>👁</div>
            <h3 className='font-semibold text-[#2f211d] text-lg mb-2'>Live Preview</h3>
            <p className='text-gray-500 text-sm'>
              See changes in real-time
            </p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Home