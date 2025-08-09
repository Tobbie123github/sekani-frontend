// src/components/ImageSwiper.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const ImageSwiper = ({ images = [], onDelete }) => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={20}
      slidesPerView={1}
      className="w-full"
    >
      {images.length === 0 ? (
        <p className="text-center p-4">No images available.</p>
      ) : (
        images.map((img, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto rounded"
            />
            {onDelete && (
              <button
                onClick={() => onDelete(index)}
                className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                type="button"
              >
                Delete
              </button>
            )}
          </SwiperSlide>
        ))
      )}
    </Swiper>
  );
};

export default ImageSwiper;
