import React, { useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  const navLinks = [
    { name: "Home", link: "#Home" },
    { name: "About", link: "#About" },
    { name: "Skills", link: "#Skills" },
    { name: "Projects", link: "#Projects" },
    { name: "Experience", link: "#Experience" },
    { name: "Contact", link: "#Contact" }
  ]

  return (
    <div className='fixed w-full top-0 left-0 z-50 bg-black px-4 sm:px-6 md:px-10 lg:px-20 py-3 flex justify-between items-center'>

      {/* Logo */}
      <h1 className='text-2xl md:text-3xl font-bold text-red-600'>
        Deepika
      </h1>

      {/* Desktop Menu */}
      <div className='hidden md:flex items-center gap-6'>
        {navLinks.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className='relative group text-white text-sm md:text-base'
          >
            {item.name}
            <span className='absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all duration-300 '></span>
          </a>
        ))}
      </div>

      {/* Mobile Icon */}
      <div className='md:hidden'>
        {menu ? (
          <FaXmark
            onClick={() => setMenu(false)}
            className='text-white text-2xl cursor-pointer'
          />
        ) : (
          <FaBars
            onClick={() => setMenu(true)}
            className='text-white text-2xl cursor-pointer'
          />
        )}
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className='absolute top-16 left-0 w-full bg-black flex flex-col items-center gap-6 py-10 md:hidden'>

          {navLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              onClick={() => setMenu(false)}
              className='text-white text-lg relative group'
            >
              {item.name}
              <span className='absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all duration-300 '></span>
            </a>
          ))}

        </div>
      )}

    </div>
  )
}

export default Navbar