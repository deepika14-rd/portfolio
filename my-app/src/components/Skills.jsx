import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../assets/assets'

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }} id='Skills'
      className='bg-black py-10 px-4 sm:px-6 md:px-10 lg:px-20'
    >
      <div className='max-w-6xl mx-auto'>

        {/* Heading */}
        <h2 className='text-red-600 font-bold text-2xl sm:text-3xl text-center mb-10'>
          My <span className='text-white'>Skills</span>
        </h2>

        {/* Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>

          {skills.map((value, index) => (
            <div
              key={index}
              className='bg-gray-500/20 backdrop-blur-lg border border-white/20 rounded-2xl p-5 
              hover:bg-gray-400/30 transition-all duration-300 hover:-translate-y-2'
            >

              {/* Top */}
              <div className='flex items-center gap-3 mb-3'>
                <div className='text-red-500 text-2xl sm:text-3xl'>
                  <value.icon />
                </div>

                <h3 className='text-white text-lg sm:text-xl font-semibold'>
                  {value.title}
                </h3>
              </div>

              {/* Description */}
              <p className='text-gray-400 text-sm leading-relaxed'>
                {value.description}
              </p>

              {/* Tags */}
              <div className='flex flex-wrap gap-2 mt-4'>
                {value.tags.map((tag, i) => (
                  <span
                    key={i}
                    className='text-xs bg-gray-700 text-white px-3 py-1 rounded-full'
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </motion.div>
  )
}

export default Skills