import React from 'react'
import { easeInOut, motion } from 'framer-motion'

const Homepage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className='bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] py-16 px-4 sm:px-6 md:px-10 lg:px-20'
    >
      <div className='max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10'>

        {/* LEFT → TEXT */}
        <div className='text-center lg:text-left flex flex-col gap-4'>
          
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white'>
            Hi, I'm <span className='text-red-600'>Deepika</span>
          </h1>

          <h4 className='text-xl sm:text-2xl md:text-3xl font-semibold text-white'>
            Web Developer
          </h4>

          <p className='text-gray-300 text-sm sm:text-base md:text-lg max-w-md mx-auto lg:mx-0'>
            Exploring AI, crafting web apps, and solving real-world problems.
          </p>

          {/* Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start'>
            <a href='#Experience' className='bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-xl font-medium transition'>
              View Work
            </a>

            <a href='#Contact' className='bg-white hover:bg-red-200 text-black px-6 py-3 rounded-xl font-medium transition'>
              Contact Me
            </a>
          </div>

        </div>

        {/* RIGHT → IMAGE */}
        <div className='relative flex justify-center items-center'>
          
          {/* Gradient Circle */}
          <div className='absolute w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-red-600 via-white to-red-600 blur-2xl opacity-30'></div>

          {/* Image */}
          <motion.img
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: 'loop',
              ease: easeInOut
            }}
            src='/p3.jpg'
            alt='profile'
            className='relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-white'
          />

        </div>

      </div>
    </motion.div>
  )
}

export default Homepage