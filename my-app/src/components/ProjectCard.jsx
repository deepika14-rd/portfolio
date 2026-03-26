import React from 'react'

export const ProjectCard = ({ title, description, image, tech, demo, code }) => {
  return (
    <div className='bg-gray-500/20 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden 
    hover:bg-gray-400/30 transition-all duration-300 hover:-translate-y-2 cursor-pointer'>

      {/* Image */}
      {image && (
        <img
          src={image}
          alt={title}
          className='w-full h-40 sm:h-48 object-cover'
        />
      )}

      {/* Content */}
      <div className='p-4 space-y-3'>

        <h3 className='text-white font-semibold text-lg sm:text-xl'>
          {title}
        </h3>

        <p className='text-gray-400 text-sm leading-relaxed'>
          {description}
        </p>

        {/* Tech Stack */}
        <div className='flex flex-wrap gap-2'>
          {tech?.map((item, index) => (
            <span
              key={index}
              className='text-xs bg-gray-700 text-white px-3 py-1 rounded-full'
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className='flex gap-3 pt-2'>
          <a
            href={demo}
            target='_blank'
            rel='noreferrer'
            className='flex-1 text-center bg-red-600 hover:bg-red-500 text-white py-2 rounded-lg text-sm transition'
          >
            Demo
          </a>

          <a
            href={code}
            target='_blank'
            rel='noreferrer'
            className='flex-1 text-center bg-white text-red-600 hover:bg-red-100 py-2 rounded-lg text-sm transition'
          >
            Code
          </a>
        </div>

      </div>
    </div>
  )
}

export default ProjectCard