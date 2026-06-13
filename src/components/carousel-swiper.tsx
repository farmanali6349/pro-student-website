"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Icon } from "@iconify/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type CarouselSwiperProps = {
  children: React.ReactNode | React.ReactNode[];
  slidesPerView?: number;
  spaceBetween?: number; // px
  breakpoints?: Record<string, any>;
  showArrows?: boolean;
  showDots?: boolean;
  className?: string;
  /** Optional top-left badge */
  badgeText?: string;
};

export function CarouselSwiper({
  children,
  slidesPerView = 1,
  spaceBetween = 20,
  breakpoints,
  showArrows = true,
  showDots = true,
  className = "",
  badgeText,
}: CarouselSwiperProps) {
  return (
    <div className={`relative ${className}`}>
      {badgeText && (
        <div className="absolute start-4 top-4 rounded-full bg-dark-orange px-3 py-1 text-xs font-bold text-white shadow">
          {badgeText}
        </div>
      )}

      <Swiper
        modules={[Navigation, Pagination]}
        navigation={showArrows}
        pagination={showDots ? { clickable: true } : false}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        breakpoints={breakpoints}
      >
        {React.Children.map(children, (child, i) => (
          <SwiperSlide key={i}>{child}</SwiperSlide>
        ))}
      </Swiper>

      {showArrows && (
        <>
          <button
            aria-label="Previous"
            className="swiper-button-prev absolute inset-y-0 start-4 z-10 my-auto flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-dark shadow-md transition hover:bg-light-orange hover:text-white"
          >
            <Icon icon="lucide:chevron-left" width={20} />
          </button>

          <button
            aria-label="Next"
            className="swiper-button-next absolute inset-y-0 end-4 z-10 my-auto flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-dark shadow-md transition hover:bg-light-orange hover:text-white"
          >
            <Icon icon="lucide:chevron-right" width={20} />
          </button>
        </>
      )}

      {showDots && <div className="swiper-pagination mt-7" />}
    </div>
  );
}

export default CarouselSwiper;
