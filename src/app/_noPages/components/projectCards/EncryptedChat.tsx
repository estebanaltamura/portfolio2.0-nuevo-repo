'use client';

import { useState, useEffect, useRef } from 'react';
import { Skeleton, useMediaQuery } from '@mui/material';
import { useRouter } from 'next/navigation';

const EncryptedChat = () => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const router = useRouter();
  const imgRef = useRef<HTMLImageElement>(null);
  const isDesktop = useMediaQuery('(min-width:1200px)');

  const clickHandler = () => {
    router.push('/project-detail/encrypted-chat');
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
        className='encrypted-chat-responsive-skeleton'
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
            ? '/cardCovers/encryptedChat/encryptedChatCoverDesktop.svg'
            : '/cardCovers/encryptedChat/encryptedChatCoverMobile.svg'
        }
        alt='Encrypted Chat Cover'
        style={{
          display: imageLoaded ? '' : 'none',
          width: '100%',
          maxWidth: '473.5px',
          margin: '0',
          borderRadius: '10px',
          cursor: 'pointer',
        }}
        className='encrypted-chat-responsive-img'
      />
    </>
  );
};

export default EncryptedChat;
