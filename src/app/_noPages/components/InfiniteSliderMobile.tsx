;

import { motion, useMotionValue, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box'; // Para contenedores en MUI
import { Typography, IconButton } from '@mui/material';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

// Define el array de slides con imágenes
const slides = [
  { icon: '/recommendationsImages/1.svg' },
  { icon: '/recommendationsImages/2.png' },
  { icon: '/recommendationsImages/3.svg' },
  { icon: '/recommendationsImages/4.svg' },
 
];

const InfiniteSliderMobile = () => {
  // Duplicar el array de slides para un loop infinito
  const duplicatedSlides = [...slides, ...slides];
  const [isPaused, setIsPaused] = useState(false); // Estado para rastrear si el slider está pausado
  const x = useMotionValue(0); // Valor de la posición X de la animación
  const controls = useAnimation(); // Control para manejar la animación manualmente

  // Función para manejar la pausa y reanudar el slider
  const togglePause = () => {
    setIsPaused(!isPaused); // Alternar entre pausado y en movimiento
  };

  // Guardar la posición actual cuando se pausa o reanudar la animación
  useEffect(() => {
    if (isPaused) {
      controls.stop(); // Detener la animación cuando se pausa
    } else {
      controls.start({
        x: [x.get(), -400 * duplicatedSlides.length], // Continuar desde la posición actual
        transition: {
          ease: 'linear',
          duration: (70 * (duplicatedSlides.length * 400 + x.get())) / (duplicatedSlides.length * 400), // Calcular la duración basada en la distancia restante
          repeat: Infinity,
          repeatType: 'loop',
        },
      });
    }
  }, [isPaused, x, controls, duplicatedSlides.length]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minWidth: '100%',
        width: '100%',
        maxWidth: '467px !important',
        height: 'fit-content',
        marginTop: '35px',
        padding: '10px 16px 24px',
        alignItems: 'center',
        borderRadius: '16px',
        border: '1px solid #494949',
        color: 'white',
        overflow: 'hidden',
        '@media(min-width: 1200px)': {
          padding: '16px 32px 32px 32px',
          maxWidth: '1021px',
          maxHeight: '608px',
        },
      }}
    >
      {/* Título con botón de pausa/reanudar */}
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          minHeight: '55px',
          gap: '11px',
          alignItems: 'center',
          justifyContent: 'space-between', // Alinea el título a la izquierda y el botón a la derecha
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '11px',
          }}
        >
           <Box sx={{ width: '25px', height: '30px' }}>
            <img
              src='/icons/testimonialsIcon.svg'
              alt=''
              style={{
                position: 'relative',
                top: '0px',
                color: 'white',
                width: '25px',
                height: '30px',
              }}
            />
          </Box>
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: '600',
              color: 'white',
              marginTop: '2px',
            }}
          >
            Recomendaciones
          </Typography>
        </Box>

        {/* Botón de pausa/reanudar */}
        <IconButton onClick={togglePause} sx={{ color: 'white', cursor: 'pointer' }}>
          {isPaused ? <PlayArrowIcon /> : <PauseIcon />}
        </IconButton>
      </Box>

      <Box
        sx={{
          height: '100%',
          overflow: 'hidden',
          backgroundColor: '#252525',
          mx: 'auto',
          mt: 3,
          width: '100%',
        }}
      >
        {/* Motion div para la animación deslizante */}
        <motion.div
          style={{ display: 'flex', cursor: 'pointer', x }} // Vincula x a useMotionValue
          animate={controls} // Usa los controles para manejar la animación
        >
          {duplicatedSlides.map((slide, index) => (
            <Box
              key={index}
              sx={{
                flexShrink: 0,
                height: '320px',
                minWidth: '320px',
                width: '100%',
                mr: 2,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                }}
              >
                <img
                  src={slide.icon}
                  alt={`Slide ${index + 1}`}
                  style={{
                    height: '100%',
                    width: 'auto',
                    objectFit: 'cover',
                    cursor: 'pointer',
                  }}
                />
              </Box>
            </Box>
          ))}
        </motion.div>
      </Box>
    </Box>
  );
};

export default InfiniteSliderMobile;
