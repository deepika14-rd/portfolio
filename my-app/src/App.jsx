import { useState } from 'react'
// import reactLogo from './assets/react.svg'

// import './App.css'
import Navbar from './components/Navbar'
import React from "react"
import Homepage from './components/homepage'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Navbar/>
      <Homepage/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/> */}

            <h1 className="bg-red-500 text-white text-5xl">TEST</h1>
    </>
  )
}

export default App
