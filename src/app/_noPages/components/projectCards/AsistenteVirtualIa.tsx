'use client';

import { useState, useEffect, useRef } from 'react';
import { Skeleton, useMediaQuery } from '@mui/material';
import { useRouter } from 'next/navigation';

const AsistenteVirtualIa = () => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const router = useRouter();
  const imgRef = useRef<HTMLImageElement>(null);
  const isDesktop = useMediaQuery('(min-width:1200px)');

  const clickHandler = () => {
    router.push('/project-detail/asistente-virtual-ia');
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
        className='asistente-virtual-ia-responsive-skeleton'
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
            ? '/cardCovers/asistenteVirtual/asistenteVirtualDesktopCover.svg'
            : '/cardCovers/asistenteVirtual/asistenteVirtualMobileCover.svg'
        }
        alt='Plumarii Cover'
        style={{
          display: imageLoaded ? '' : 'none',
          width: '100%',
          maxWidth: '473.5px',

          margin: '0',
          borderRadius: '10px',
          cursor: 'pointer',
        }}
        className='asistente-virtual-ia-responsive-img'
      />
    </>
  );
};

export default AsistenteVirtualIa;
