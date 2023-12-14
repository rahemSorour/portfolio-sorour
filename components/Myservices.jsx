import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { serviceData } from '@/app/constants/data';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import SwiperCore, { FreeMode, Pagination } from 'swiper';
import { RxArrowTopRight } from 'react-icons/rx';

// Install the Swiper modules
SwiperCore.use([FreeMode, Pagination]);

export default function MyWork() {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      className='h-[260px] sm:h[380px] '>
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className='bg-[rgba(65,47,123,0.15)] rounded-lg px-2 py-4 flex md:px-8 md:py-8 sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,162,0.15)] transition-all duration-300'>
            <div className='text-secondary'>{item.icon}</div>
            <div>
            <div className='mb-2 text-lg'>{item.title}</div>
            <p className='max-w-400 leading-normal'>{item.description}</p>
            </div>
          <div className='text-3xl'>
            <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-secondary transition-all duration-300'/>
          </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}




