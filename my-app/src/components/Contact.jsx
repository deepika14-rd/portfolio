import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedinIn, FaMapMarker } from 'react-icons/fa'

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }} id='Contact'
      className='bg-black py-10 px-4 sm:px-6 md:px-10 lg:px-20'
    >
      <div className='max-w-6xl mx-auto'>

        {/* Heading */}
        <h2 className='text-red-600 font-bold text-2xl sm:text-3xl text-center mb-6'>
          Get <span className='text-white'>In Touch</span>
        </h2>

        {/* Subtitle */}
        <p className='text-gray-400 text-center mb-10 max-w-xl mx-auto text-sm sm:text-base'>
          Feel free to reach out for collaborations, projects, or just a friendly hello 👋
        </p>

        {/* Main Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>

          {/* LEFT → FORM */}
          <form className='space-y-5'>
            
            <div className='flex flex-col gap-2'>
              <label className='text-white'>Your Name</label>
              <input
                type='text'
                className='w-full bg-gray-800 px-4 py-3 rounded-xl border border-gray-600 text-white focus:outline-none focus:border-red-500'
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label className='text-white'>Email Address</label>
              <input
                type='email'
                className='w-full bg-gray-800 px-4 py-3 rounded-xl border border-gray-600 text-white focus:outline-none focus:border-red-500'
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label className='text-white'>Message</label>
              <textarea
                rows={5}
                className='w-full bg-gray-800 px-4 py-3 rounded-xl border border-gray-600 text-white focus:outline-none focus:border-red-500 resize-none'
              />
            </div>

            <button
              type='submit'
              className='w-full sm:w-auto bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-xl transition duration-300'
            >
              Submit
            </button>

          </form>

          {/* RIGHT → CONTACT INFO */}
          <div className='flex flex-col justify-between space-y-8'>

            {/* Info Cards */}
            <div className='space-y-6'>

              {/* Location */}
              <div className='flex items-start gap-4'>
                <FaMapMarker className='text-red-500 text-xl mt-1' />
                <div>
                  <h3 className='text-white font-semibold text-lg'>Location</h3>
                  <p className='text-gray-400 text-sm'>South Delhi</p>
                </div>
              </div>

              {/* Email */}
              <div className='flex items-start gap-4'>
                <FaEnvelope className='text-red-500 text-xl mt-1' />
                <div>
                  <h3 className='text-white font-semibold text-lg'>Email</h3>
                  <p className='text-gray-400 text-sm break-all'>
                    deepikabhardwaj785@gmail.com
                  </p>
                </div>
              </div>

            </div>

            {/* Social Icons */}
            <div className='flex gap-4'>
              <h3 className='text-white font-semibold text-lg'>Follow Me</h3>
              <a
                href='https://github.com/deepika14-rd/news-chatbot.git'
                target='_blank'
                rel='noreferrer'
                className='p-3 bg-gray-800 rounded-full hover:bg-red-600 transition'
              >
                <FaGithub className='text-white' />
              </a>

              <a
                href='https://www.linkedin.com/in/deepika-bhardwaj-bb16a1327'
                target='_blank'
                rel='noreferrer'
                className='p-3 bg-gray-800 rounded-full hover:bg-red-600 transition'
              >
                <FaLinkedinIn className='text-white' />
              </a>
            </div>

          </div>

        </div>

        {/* Footer */}
        <div className='text-center mt-12 text-gray-500 text-sm'>
          © 2026 Created by Deepika. All rights reserved.
        </div>

      </div>
    </motion.div>
  )
}

export default Contact