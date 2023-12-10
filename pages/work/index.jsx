import React from 'react'
import { workData } from '@/app/constants/data';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
// import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Link from 'next/link';
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';
export default function work() {
  const slides = workData.slides || [];
  return ( 
    <section className='padding-container max-container py-12 flex flex-col flexCenter md:flex-row md:gap-8 lg:gap-20 xl:gap-28 xl:py-32'>
      <div className='md:max-w-[40%]'>
      <div className='pb-12 text-center uppercase'>
        <h3 className='text-[30px] lg:text-[36px] font-extrabold relative leading-normal uppercase'>wor <span className='text-secondary'>k</span>
        <span className='text-[45px] lg:text-[54px] font-extrabold text-white/5 absolute top-[50%] left-1/2 -translate-y-1/2 -translate-x-1/2 uppercase'> My Work</span></h3>
        <p className='text-center max-w-md mx-auto text-gray-20 mt-12'>hhh hhhh hhhh hhhhh hhhhh hhhhh hhhh hhh hh h h h h h</p>
      </div>
      </div>

      <div className='w-full sm:max-w-[50%]'>
        <Swiper
        breakpoints={{
          640:{
            slidesPreView:2,
            spaceBetween:10,
          },
        }}
        // freeMode={true}
        pagination={{
          clickble:true,
        }}
        modules={{Pagination}}
        className='h-[344px] sm:h-[277px] md:h-[377px] sm:mt-16'>
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className='flex flex-col items-center gap-y-4'>
                {slide.images && slide.images.map((image, j) => (
                  <div key={j} className='felxCenter'>
                    <div className='relative overflow-hidden group rounded-lg cursor-pointer'>
                      <div className='min-w-full'>
                        <Image src={image.url} alt='workImg' height={150} width={250} />
                      </div>
                      <div className='absolute inset-0 bg-gradient-to-l from-[#19974e] to-[#fe0000] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                      <Link href={'/'} className='absolute top-[100%] left-1/2 text-2xl -translation-x-1/2 group-hover:top-1/2 transition-all duration-500 opacity-0 group-hover:opacity-100'>
                        <FaExternalLinkAlt/>
                      </Link>
                    </div>
                  </div>
                  ))}
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  )
}
