import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // modules séparés

import 'swiper/css';
import 'swiper/css/navigation';

// Dynamically import all files in /public/media_carousel
const mediaModules = import.meta.glob('/src/media_carousel/*', { eager: true });

const mediaItems = Object.entries(mediaModules).map(([path, module]) => {
  const src = module.default;
  const extension = path.split('.').pop().toLowerCase();
  const type = ['mp4', 'webm', 'ogg'].includes(extension) ? 'video' : 'image';
  return { type, src };
});

const MediaCarousel = () => {
  return (
    <section className="flex justify-center p-4">
  <div className="w-full max-w-3xl">
    <Swiper
      navigation
      modules={[Navigation]}
      className="rounded-xl overflow-hidden"
    >
      {mediaItems.map((item, index) => (
        <SwiperSlide
          key={index}
          className="flex items-center justify-center bg-black h-[300px]"
        >
          {item.type === 'image' ? (
            <img
              src={item.src}
              alt={`media-${index}`}
              className="h-full object-contain"
            />
          ) : (
            <video controls className="h-full object-contain">
              <source src={item.src} type={`video/${item.src.split('.').pop()}`} />
              Your browser does not support the video tag.
            </video>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>

  );
};

export { MediaCarousel };
