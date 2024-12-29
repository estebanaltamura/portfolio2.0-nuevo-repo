import { Box, useMediaQuery } from '@mui/material';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const customStyles = `
  .swiper-button-next,
  .swiper-button-prev {
    color: #CCC;
  }

  .swiper-pagination-bullet {
    background-color: #CCC;
  }

  .swiper-pagination-bullet-active {
    background-color: #000;
  }

  /* Clase para ajustar el contenedor del Swiper */
  .mySwiperContainer {
    width: 100%;
    max-width: 100%;
    padding: 0 2px; /* Espaciado lateral */
    margin: 0 auto;
    box-sizing: border-box;
  }

  /* Ajusta cada slide para que respete el ancho disponible */
  .swiper-slide {
    width: 100% !important; /* Asegúrate de que el slide ocupe todo el espacio del contenedor */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Opcional: asegura que las imágenes se adapten correctamente */
  .swiper-slide img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

interface ICustomCarouselProps {
  desktopSrcImages: string[];
  mobileSrcImages: string[];
  greaterThan600Mode: '100%' | 'full width' | 'customWidth';
  mobileMode: '100%' | 'full width' | 'customWidth';
  customWidthgreaterThan600Mode?: string;
  customWidthMobile?: string;
  marginBottom: number;
  marginTop: number;
}

const CustomCarousel: React.FC<ICustomCarouselProps> = ({
  desktopSrcImages,
  mobileSrcImages,
  greaterThan600Mode,
  mobileMode,
  customWidthgreaterThan600Mode,
  customWidthMobile,
  marginBottom,
  marginTop,
}) => {
  const isGreaterThan600 = useMediaQuery('(min-width:600px)');

  const mobileItems = mobileSrcImages.map((src, index) => (
    <SwiperSlide key={index}>
      <img src={src} alt={`Slide ${index + 1}`} style={{userSelect: 'none'}}/>
    </SwiperSlide>
  ));

  const desktopItems = desktopSrcImages.map((src, index) => (
    <SwiperSlide key={index}>
      <img src={src} alt={`Slide ${index + 1}`} style={{userSelect: 'none'}}/>
    </SwiperSlide>
  ));

  return (
    <Box
      sx={{
        width: '100%',
        margin: '0 auto',
        marginTop: `${marginTop}px`,
        marginBottom: `${marginBottom}px`,
        boxSizing: 'border-box',
        padding: '0 1px 0 0', // Ajusta los márgenes laterales para respetar el layout
      }}
    >
      <style>{customStyles}</style>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="mySwiperContainer"
      >
        {isGreaterThan600 ? desktopItems : mobileItems}
      </Swiper>
    </Box>
  );
};

export default CustomCarousel;
