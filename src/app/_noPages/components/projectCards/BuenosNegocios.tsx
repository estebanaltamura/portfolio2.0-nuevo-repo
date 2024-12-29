;

import { useState, useEffect, useRef } from 'react';
import { Skeleton, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BuenosNegocios = () => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const isDesktop = useMediaQuery('(min-width:1200px)');
  const router = useNavigate();
  const imgRef = useRef<HTMLImageElement>(null);

  const clickHandler = () => {
    router('/project-detail/buenos-negocios');
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setImageLoaded(true);
    }
  }, []); 

  return (
    <>
      {!imageLoaded && (
        <Skeleton

          className='buenos-negocios-responsive-skeleton'
          variant='circular'
          animation='wave'
          style={{
            borderRadius: '10px',
          }}
        />
      )}

      <img
        ref={imgRef}
        onLoad={handleImageLoad}
        onClick={clickHandler}
        src={
          isDesktop
            ? '/cardCovers/buenosNegocios/buenosNegociosCoverDesktop.svg'
            : '/cardCovers/buenosNegocios/buenosNegociosCoverMobile.svg'
        }
        alt='Buenos Negocios Cover'
        style={{
          display: imageLoaded ? '' : 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          width: '100%',
          maxWidth: '473.5px',
        }}
        className='buenos-negocios-responsive-img'
      />
    </>
  );
};

export default BuenosNegocios;
