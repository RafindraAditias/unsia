"use client";
import React, { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import CardIntroduction from "./CardIntroduction";
import Image from "next/image";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SliderSwiperProps {
    children?: ReactNode;
}

const SliderSwiper: React.FC<SliderSwiperProps> = ({children}) => {
  return (
    <div className="flex">
      <div className="w-1/2 pl-[90px]"> {/* Container Swiper */}
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="h-[513px] w-[860px] mt-[215px] ml-[166px] border-none"
        >
          <SwiperSlide><CardIntroduction /></SwiperSlide>
          <SwiperSlide><CardIntroduction /></SwiperSlide>
          <SwiperSlide><CardIntroduction /></SwiperSlide>
        </Swiper>
      </div>
      <div className="w-1/2"> {/* Menambahkan padding */}
            {children}
      </div>

            {/* Styling Pagination Kustom */}
            <style jsx global>{`
        .swiper-pagination-bullet {
          width: 36px;
          height: 8px;
          background: #e0e0e0;
          border-radius: 0px;
          opacity: 1;
          margin: 0 5 0 20;
          transition: background 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          background: #1976d2;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0 );
        }

          
      `}</style>
      
    </div>
  );
}

export default SliderSwiper;