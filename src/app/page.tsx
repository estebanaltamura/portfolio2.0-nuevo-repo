'use client';

import { Box, useMediaQuery } from '@mui/material';
import Profile from './_noPages/views/home/profile/Profile';
import Projects from './_noPages/views/home/projects/Projects';
import Stack from './_noPages/views/home/stack/Stack';
import WorkExperiences from './_noPages/views/home/workExperiences/WorkExperiences';
import { hotjar } from 'react-hotjar';
import { useEffect, useState } from 'react';
import AboutMe from './_noPages/views/home/aboutMe/AboutMe';

import InfiniteSliderDesktop from './_noPages/components/InfiniteSliderDesktop';
import InfiniteSliderMobile from './_noPages/components/InfiniteSliderMobile';

const Home: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);


  useEffect(() => {
    hotjar.initialize({ id: 5059506, sv: 6 });
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    // Llamar a la función inmediatamente para establecer el estado inicial
    handleResize();

    // Escuchar el evento resize y actualizar el estado cuando cambie el tamaño
    window.addEventListener('resize', handleResize);

    // Limpiar el listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  if(typeof isMobile !== 'boolean') null

  return (
    <>
      <Profile />
      <Projects />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          height: 'fit-content',
          gap: '35px',
          marginTop: '35px',

          '@media(max-width: 1200px)': {
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            marginTop: '35px',
          },
        }}
      >
        <WorkExperiences />
        <Stack />
       
      </Box>
      <AboutMe />
      <Box sx={{  width: '100%', maxWidth:'467px', '@media(min-width: 1200px)': {
          maxWidth: '1021px',
          maxHeight: '608px',
        },
 }}>
        {isMobile ? <InfiniteSliderMobile /> : <InfiniteSliderDesktop />}
      </Box>
      
      
    </>
  );
};

export default Home;
