;

import { useState, useEffect, useRef } from 'react';
import { Skeleton, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Lonely = () => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const router = useNavigate();
  const imgRef = useRef<HTMLImageElement>(null);
  const isDesktop = useMediaQuery('(min-width:1200px)');

  const clickHandler = () => {
    router('/project-detail/lonely');
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
        className='lonely-responsive-skeleton'
          variant='rectangular'
          animation='wave'
          style={{
            borderRadius: '10px',
          }}
        />
      )}
      <img
        ref={imgRef}
        onClick={clickHandler}
        onLoad={handleImageLoad}
        src={
          isDesktop
            ? '/cardCovers/lonely/lonelyCoverDesktop.svg'
            : '/cardCovers/lonely/lonelyCoverMobile.svg'
        }
        alt='Lonely Cover'
        style={{
          display: imageLoaded ? '' : 'none',
          width: '100%',
          maxWidth: '473.5px',
          margin: '0',
          borderRadius: '10px',
          cursor: 'pointer',
        }}
        className='lonely-responsive-img'
      />
    </>
  );
};

export default Lonely;
