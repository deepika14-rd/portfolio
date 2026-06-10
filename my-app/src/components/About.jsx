import React from 'react'
import { easeInOut, motion } from 'framer-motion'
import { aboutInfo } from '../assets/assets'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }} id='About'
      className='bg-black py-10 px-4 sm:px-6 md:px-10 lg:px-20'
    >
      <div className='max-w-6xl mx-auto'>

        {/* Heading */}
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center text-red-600 mb-10'>
          About <span className='text-white'>Me</span>
        </h1>

        {/* Top Section */}
        <div className='flex flex-col lg:flex-row items-center gap-10'>

          {/* Image */}
          <motion.img
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.7, ease: easeInOut }}
            src='/p3.jpg'
            alt='profile'
            className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm rounded-2xl object-cover'
          />

          {/* Text */}
         <div className='flex flex-col gap-4 text-center lg:text-left'>
  <p className='text-gray-300 text-sm sm:text-base leading-relaxed'>
    Hi, I'm <span className='text-white font-semibold'>Deepika Bhardwaj</span> — a B.Sc. Electronics student at Sri Venkateswara College, University of Delhi, who somehow ended up spending most of her time writing code and building things for the web.
  </p>

  <p className='text-gray-300 text-sm sm:text-base leading-relaxed'>
    I work with <span className='text-white font-semibold'>React, JavaScript, Node.js, HTML, and CSS</span> to build full-stack web applications — from a social media platform with real-time messaging to an AI-powered news chatbot. I care about writing clean code and building things that actually work well for the people using them.
  </p>

  <p className='text-gray-300 text-sm sm:text-base leading-relaxed'>
    Outside of coding, I've worked as a <span className='text-white font-semibold'>Google Campus Ambassador</span>, served as <span className='text-white font-semibold'>Department President</span>, and interned with the <span className='text-white font-semibold'>Gurugram Police Cyber Security</span> team — experiences that taught me how to think critically and communicate clearly in professional settings.
  </p>

  <p className='text-gray-300 text-sm sm:text-base leading-relaxed'>
    I'm currently looking for opportunities where I can keep learning, contribute to real projects, and grow as a developer. If that sounds like something you're building — let's connect.
  </p>
</div>

        </div>

        {/* Cards Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
          {aboutInfo.map((info, index) => (
            <div
              key={index}
              className='bg-gray-500/20 backdrop-blur-lg border border-white/20 rounded-2xl p-5 
              hover:bg-gray-400/30 transition-all duration-300 hover:-translate-y-2 cursor-pointer'
            >
              <div className='text-red-500 text-3xl mb-2'>
                <info.icon />
              </div>

              <h2 className='font-semibold text-white text-lg'>
                {info.title}
              </h2>

              <p className='text-gray-400 text-sm mt-1'>
                {info.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </motion.div>
  )
}

export default About