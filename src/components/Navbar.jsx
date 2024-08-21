import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi' 

const Navbar = ({bar,setBar}) => {
  return (
    <div data-aos="fade-down" className="container flex justify-between text-white  items-center py-2 absolute top-0 left-0 z-20 w-full">
        <div>
            <h1 className=' text-4xl font-bold uppercase'>Straw<span className='font-normal'>Berries</span></h1>
        </div>
        <ul className='flex space-x-14 text-xl'>
            <li className='hidden md:flex' >
                <a href="#home">Home</a>
            </li>
            <li className='hidden md:flex'>
                <a href="#about">About</a>
            </li>
            <li className='hidden md:flex'>
                <a href="#contact">Contact</a>
            </li> 

        </ul>
        <div onClick={()=>{
            setBar(!bar)

        }}>
            <GiHamburgerMenu className='text-3xl cursor-pointer' />
        </div>
    </div>
  )
}

export default Navbar
