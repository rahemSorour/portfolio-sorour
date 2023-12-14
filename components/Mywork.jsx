"use client";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import SwiperCore, { FreeMode, Pagination } from "swiper";
import { RxArrowTopRight } from "react-icons/rx";
import { workData } from "@/app/constants/data";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

// Install the Swiper modules
SwiperCore.use([FreeMode, Pagination]);

export default function MyWork() {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={{ Pagination }}
      className="h-[420px] sm:h-[500px] md:w-[500px] "
    >
      {workData.slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="w-full grid grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((image, index) => (
              <div key={index}>
                <div className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                  <div className="flex items-center justify-center relative overflow-hidden">
                    <Image src={image.img} width={500} height={300} alt="" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-l from-[#e82a9c] to-[#0a0111] opacity-0 group-hover:opacity-80 transition-all duration-700">
                    <div className="grid grid-cols-1 gap-x-2 text-[13px] tracking-[0.2em] relative">
                      <div className="text-xl font-bold px-4 mt-4">
                        {image.title}
                      </div>
                      <div className="w-full h-[20px] px-4 my-4">
                        {image.desc}
                      </div>
                      <Link
                        href={image.url}
                        className="absolute top-0 right-0 mt-1 mr-4 text-2xl "
                      >
                        <FaExternalLinkAlt />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
