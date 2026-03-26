import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../assets/assets'
import { ProjectCard } from './ProjectCard'
import { FaArrowCircleRight } from 'react-icons/fa'

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}  id='Projects'
      className='bg-black py-10 px-4 sm:px-6 md:px-10 lg:px-20'
    >
      <div className='max-w-6xl mx-auto'>

        {/* Heading */}
        <h2 className='text-white font-bold text-2xl sm:text-3xl text-center mb-10'>
          Projects
        </h2>

        {/* Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projects.map((value, index) => (
            <ProjectCard key={index} {...value} />
          ))}
        </div>

        {/* Button */}
        <div className='mt-10 flex justify-center'>
          <a
            href='#'
            className='flex items-center gap-2 border border-red-600 px-6 py-3 rounded-full 
            text-white hover:bg-red-600 transition duration-300'
          >
            <span className='text-sm sm:text-base'>
              View More Projects
            </span>
            <FaArrowCircleRight className='text-lg' />
          </a>
        </div>

      </div>
    </motion.div>
  )
}

export default Projects