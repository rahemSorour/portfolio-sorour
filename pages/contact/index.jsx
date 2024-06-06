import React from 'react'
import { HiArrowDownRight } from 'react-icons/hi2'

export default function contact() {
  return (
    <section className='max-container padding-container py-12 xl:py-20'>
      <div className='flex flex-col gap-6'>
      {/* <div className='md:max-w-[35%]'> */}
        <div className='pb-12 text-center'>
          <h3 className='text-[30px] lg:text-[36px] font-extrabold relative leading-normal uppercase'>
            Contact <span className='text-secondary'>Me</span>
            {/* <span className='text-[45px] lg:text-[54px] font-extrabold text-white/5 absolute top-[50%] left-1/2 -translate-y-1/2 -translate-x-1/2 uppercase'>
              Get In Touch
            </span> */}
          </h3>
        </div>

        <form className='flex flex-1 flex-col gap-4 w-full mx-auto max-w-[33rem]'>
         <div className='flex gap-2 w-full'>
          <input
          type='text'
          placeholder='Enter Your Name'
          className='regular-14 placeholder:text-gray-50 rounded-2xl px-4 py-2 bg-tertiary outline-none w-1/2'/>

       <input
          type='text'
          placeholder='Enter Your Email'
          className='regular-14 placeholder:text-gray-50 rounded-2xl px-4 py-1.5 bg-tertiary outline-none w-1/2'/>
        </div>
        <input
          type='text'
          placeholder='Enter Your Subject'
          className='regular-14 placeholder:text-gray-50 rounded-full px-4 py-2 bg-tertiary outline-none'/>
          <textarea id="" cols="10" rows="8" placeholder='Enter Your Message' className='regular-14 placeholder:text-gray-50 rounded-2xl px-4 py-1 bg-tertiary outline-none'></textarea>
        <button className='p-2 bg-secondary rounded-2xl flexCenter gap-2 w-[11rem] hover:animate-pulse'>Send Message <span><HiArrowDownRight/></span></button>
        </form>
      </div>
    </section>
  )
}
