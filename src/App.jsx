import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AOS from 'aos'
import 'aos/dist/aos.css'


function App() {
  useEffect(()=>{
    AOS.init({
      offset:100,
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
     
    })

  },[])
  return (
    <>
    <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
    <script src="bower_components/aos/dist/aos.js"></script> 

    <Hero />
    

    </>
  )
}

export default App
