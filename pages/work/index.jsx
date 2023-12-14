import React from 'react'
import MyWork from '@/components/Mywork';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import fadeIn from '@/components/fadeIn'


export default function work() {
  return(
  <div className='h-full bg-primary/30 lg:py-24 lg:px-36 flex items-center'>
  <div className='container mx-auto'>
      <div className='flex sm:item-center sm:justify-center flex-col xl:flex-row gap-x-4'>
        <div className='text-center flex xl:w-[20vm] flex-col lg:text-left mb-4 xl:mb-0'>
        <motion.h3
        variants={fadeIn('up',0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='h2 xl:mt-8'>My <span className='text-secondary'>work .</span></motion.h3>
        {/* <span className='text-[45px] lg:text-[54px] font-extrabold text-white/30 absolute top-[50%] left-1/2 -translate-y-1/2 -translate-x-1/2 uppercase'> My Work</span></h3> */}
        <motion.p
        variants={fadeIn('up',0.4)}
        initial='hidden'
        exit='hidden'
        animate='show'
        className='mb-4 max-w-[400px] mx-auto lg:mx-0'>Embark on a visual journey through our diverse projects. Where creativity meets impact, each creation is a testament to precision, pushing boundaries. Explore innovation firsthand with me</motion.p>
        </div>
        <motion.div
        variants={fadeIn('down',0.6)}
        initial='hidden'
        animate='show'
        exit='hidden'
         className='lg:max-w-[66%]' >
        <MyWork/>
        </motion.div>
      </div>
    </div>
  </div>

  )
}


