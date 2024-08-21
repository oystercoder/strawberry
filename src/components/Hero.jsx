import React, { useState } from 'react'
import Navbar from './Navbar'
import straw from '../assets/strawberry.png'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { CiInstagram } from 'react-icons/ci';
import { BsInstagram } from 'react-icons/bs';

const Hero = () => {
  const [bar,setBar]=useState(false);
  return (
    <main className='bg-dark md:py-6 md:px-12'>
      <section className=' relative min-h-[650px] bg-gradient-to-r from-primary to-secondary w-full md:rounded-xl shadow-md'>
        <div className="container">
          <Navbar bar={bar} setBar={setBar} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-[650px] place-items-center ">
          <div className='text-white text-3xl pl-6 md:pl-12 space-y-4 p-4 md:mt-0 mt-[100px]'><h1 data-aos="fade-up" data-aos-delay="300" >01_______
            </h1>
            <h1 data-aos="fade-up" data-aos-delay="300"  className='text-5xl font-bold uppercase text-shadow'>A healthy fruit</h1>
            <p data-aos="fade-up" data-aos-delay="300"  className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis maiores voluptas asperiores magnam. Laborum doloremque itaque, neque beatae, harum animi aspernatur possimus quo porro aperiam quos. Autem dolore culpa atque?</p>
            <button className='border border-white px-4 py-2 rounded-xl  hover:bg-white hover:text-red-400'>Shop Now</button>
            </div>
          <div>
            <img data-aos="zoom-in" src={straw} alt="image not found"  className='w-[300px] img-shadow relative z-[1]'/>
          </div>
          <div className='hidden md:flex'></div>

        </div>
        <h1  data-aos="zoom-out" className='text-center text-[80px] text-white uppercase font-bold sm:text-[120px] md:text-[150px] xl:text-[180px] absolute bottom-0 w-full z-0 text-shadow'>berries</h1>
        {
          bar &&(
            <div className='absolute top-0 right-0 w-[120px] h-full bg-gradient-to-b from-primary to-secondary z-10'>
              <div className='w-full h-full flex justify-center items-center flex-col space-y-6'>
                <div className='w-[1px] h-[70px] bg-white'>

                </div>
                <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
                  <FaFacebook className='text-2xl text-white' />
                  
                </div>
                <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
                  <FaLinkedin className='text-2xl text-white' />
                  
                </div>
                <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
                  <FaInstagram className='text-2xl text-white' />
                  
                </div>
                <div className='w-[1px] h-[70px] bg-white'>

</div>


              </div>
              </div>
          )
        }
      </section>
    </main>
  )
}

export default Hero
 