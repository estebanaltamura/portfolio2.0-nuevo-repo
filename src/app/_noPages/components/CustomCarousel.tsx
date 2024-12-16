import { Box, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const customStyles = `
  .swiper-button-next, .swiper-button-prev {
    color: #CCC;
  }
      .swiper-pagination-bullet {
    background-color: #CCC;
  }
  .swiper-pagination-bullet-active {
    background-color: #000; /* Color cuando el dot está activo */
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
  const [width, setWidth] = useState('auto');

  useEffect(() => {
    const calculateWidth = () => {
      if (isGreaterThan600) {
        switch (greaterThan600Mode) {
          case '100%':
            return '100%';
          case 'full width':
            return '100vw';
          case 'customWidth':
            return customWidthgreaterThan600Mode || 'auto';
          default:
            return 'auto';
        }
      } else {
        switch (mobileMode) {
          case '100%':
            return '100%';
          case 'full width':
            return '100vw';
          case 'customWidth':
            return customWidthMobile || 'auto';
          default:
            return 'auto';
        }
      }
    };

    setWidth(calculateWidth());
  }, [
    isGreaterThan600,
    greaterThan600Mode,
    mobileMode,
    customWidthgreaterThan600Mode,
    customWidthMobile,
  ]);

  const mobileItems = mobileSrcImages.map((src, index) => (
    <SwiperSlide key={index}>
      <img src={src} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
    </SwiperSlide>
  ));
  const desktopItems = desktopSrcImages.map((src, index) => (
    <SwiperSlide key={index}>
      <img src={src} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
    </SwiperSlide>
  ));

  return (
    <Box
      sx={{
        position: 'relative',
        width: width,
        maxWidth: '100%',
        margin: width === '100vw' ? '0 calc(50% - 50vw)' : '0 auto',
        marginTop: `${marginTop}px`,
        marginBottom: `${marginBottom}px`,
      }}
    >
      <style>{customStyles}</style>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {isGreaterThan600 ? desktopItems : mobileItems}
      </Swiper>
    </Box>
  );
};

export default CustomCarousel;
