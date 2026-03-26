import React from 'react'
import { easeInOut, motion } from 'framer-motion'
import { workData } from '../assets/assets'

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: easeInOut }}
      viewport={{ once: true }} id='Experience'
      className='bg-black py-10 px-4 sm:px-6 md:px-10 lg:px-20'
    >
      <div className='max-w-5xl mx-auto'>

        {/* Heading */}
        <h2 className='text-red-600 font-bold text-2xl sm:text-3xl text-center mb-10'>
          Work <span className='text-white'>Experience</span>
        </h2>

        {/* Timeline */}
        <div className='relative border-l-2 border-gray-600 space-y-10'>

          {workData.map((value, index) => (
            <div key={index} className='relative pl-8 sm:pl-10'>

              {/* Dot */}
              <div className='absolute -left-[7px] top-2 w-4 h-4 bg-red-600 rounded-full'></div>

              {/* Card */}
              <div className='bg-gray-500/20 backdrop-blur-lg border border-white/20 rounded-2xl p-5 
              hover:bg-gray-400/30 transition-all duration-300 hover:-translate-y-2'>

                {/* Top row */}
                <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2'>
                  <h3 className='text-lg sm:text-xl font-semibold text-white'>
                    {value.role}
                  </h3>

                  <span className='text-sm sm:text-base text-red-500 font-medium'>
                    {value.duration}
                  </span>
                </div>

                {/* Company */}
                <p className='text-gray-300 text-sm mt-2'>
                  {value.company}
                </p>

                {/* Description */}
                <p className='text-gray-400 text-sm mt-2 leading-relaxed'>
                  {value.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </motion.div>
  )
}

export default Experience