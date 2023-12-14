import React from 'react'
import Myservices from '@/components/Myservices';
// import Swiper and modules styles
import 'swiper/css';
// import 'swiper/css/free-mode';
import 'swiper/css/pagination';

export default function service() {
  return(
  <div className='h-full bg-primary/30 py-20 flex items-center'>
  <div className='container mx-auto '>
      <div className='flex flex-col xl:flex-row gap-x-8 '>
        <div className='text-center flex xl:w-[30vm] flex-col lg:text-left mb-4 xl:mb-0 '>
        <h3 className='h3 xl:mt-4'>My <span className='text-secondary'>Services .</span></h3>
        {/* <span className='text-[45px] lg:text-[54px] font-extrabold text-white/30 absolute top-[50%] left-1/2 -translate-y-1/2 -translate-x-1/2 uppercase'> My Work</span></h3> */}
        <p className='mb-4 max-w-[400px] mx-auto lg:mx-0'>Experience excellence with our services. Tailored solutions, precision, and innovation converge to elevate your vision</p>
        </div>
        <div className='w-full xl:max-w-[60%]'>
        <Myservices/>
        </div>
        
      </div>
    
    </div>
    </div>

  )
}
