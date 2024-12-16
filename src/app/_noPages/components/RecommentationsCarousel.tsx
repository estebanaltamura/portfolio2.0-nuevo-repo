import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Box } from '@mui/material';

interface IRecommendationsCarouselProps {
  recommendations: string[]; // Array de recomendaciones a mostrar
  autoPlay?: boolean; // Activar o desactivar autoplay
  interval?: number; // Intervalo de autoplay en milisegundos
  showControls?: boolean; // Mostrar o esconder controles de navegación
}

const RecommendationsCarousel: React.FC<IRecommendationsCarouselProps> = ({
  recommendations,
  autoPlay = false, // Por defecto, autoplay desactivado
  interval = 3000, // Intervalo predeterminado: 3 segundos
  showControls = true, // Por defecto, mostrar controles
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (e: any) => setActiveIndex(e.item);

  const recommendationItems = recommendations.map((rec, index) => (
    <Box
      key={index}
      sx={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        padding: '20px 60px',
        textAlign: 'center',
        fontSize: '1.2rem',
        borderRadius: '10px',
        minHeight:'400px',
      }}
    >
      {rec}
    </Box>
  ));

  const buttonStyle: React.CSSProperties = {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    cursor: 'pointer',
    position: 'absolute',
    top: 'calc(50% - 27px)',
    transform: 'translateY(-50%)',
    zIndex: 10,
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #8C8C8C',
  };

  return (
    <Box sx={{ width: '100%', margin: '0 auto' }}>
      <AliceCarousel
        items={recommendationItems}
        infinite
        activeIndex={activeIndex}
        onSlideChanged={handleSlideChange}
        autoPlay={autoPlay}
        autoPlayInterval={interval}
        disableButtonsControls={!showControls}
        renderPrevButton={showControls ? () => (
          <button style={{ ...buttonStyle, left: '10px' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-chevron-left"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        ) : undefined}
        renderNextButton={showControls ? () => (
          <button style={{ ...buttonStyle, right: '10px' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-chevron-right"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        ) : undefined}
      />
    </Box>
  );
};

export default RecommendationsCarousel;
