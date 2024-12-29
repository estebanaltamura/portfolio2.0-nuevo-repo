;

import { Box, Typography, useMediaQuery } from '@mui/material';
import ActasItalianas from 'app/_noPages/components/projectCards/ActasItalianas';
import AsistenteVirtualIa from 'app/_noPages/components/projectCards/AsistenteVirtualIa';
import BuenosNegocios from 'app/_noPages/components/projectCards/BuenosNegocios';
import Chat from 'app/_noPages/components/projectCards/Chat';
import EncryptedChat from 'app/_noPages/components/projectCards/EncryptedChat';
import Lonely from 'app/_noPages/components/projectCards/Lonely';
import Plumarii from 'app/_noPages/components/projectCards/Plumarii';
import Varios from 'app/_noPages/components/projectCards/Varios';

const Projects = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '467px',
        height: 'fit-content',
        maxHeight: '473px',
        marginTop: '70px',
        padding: '10px 16px 24px',
        alignItems: 'center',
        borderRadius: '16px',
        border: '1px solid #494949',
        color: 'white',
        overflow: 'hidden',
        '@media(min-width: 1200px)': {
          padding: '16px 32px 32px 32px',
          width:'1021px',
          maxWidth: '1021px',
          maxHeight: '608px',
        },
      }}
    >
      {/*Header*/}
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          minHeight: '55px',
          gap: '11px',
          alignItems: 'center',
        }}
      >
        <Box sx={{ width: '20px', height: '20px' }}>
          <img src='/icons/projectIcon.svg' alt='' />
        </Box>
        <Typography
          sx={{
            fontSize: '18px',
            fontWeight: '600',
            color: 'white',
            marginTop: '2px',
          }}
        >
          Proyectos
        </Typography>
      </Box>
      {/*Projects*/}
      <Box
        sx={{
          display: 'block',
          width: '100%',
          height: 'fit-content',
          overflowY: 'auto',
          '&::-webkit-scrollbar': {
            width: '5px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#D9D9D9',
            borderRadius: '20px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#8C8C8C',
            borderRadius: '20px',
          },
          
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            '@media(min-width: 1200px)': {
              flexDirection: 'row',
              height: '553px',
            },
          }}
        >
          <Box
            sx={{
              display: 'none',
              flexDirection: 'column',
              maxWidth: '457px',
              marginRight: '4px',
              gap: '10px',
              '@media(min-width: 1200px)': {
                display: 'flex',
              },
            }}
          >
            <AsistenteVirtualIa />
            <Chat />
            <ActasItalianas />            
            <Varios />
          </Box>
          <Box
            sx={{
              display: 'none',
              flexDirection: 'column',
              width: '457px',
              marginLeft: '4px',
              gap: '10px',
              '@media(min-width: 1200px)': {
                display: 'flex',
              },
            }}
          >
            <BuenosNegocios />
            <Plumarii />
            <Lonely />
            <EncryptedChat />
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              paddingRight: '8px',
              gap: '10px',
              '@media(min-width: 1200px)': {
                display: 'none',
              },
            }}
          >
            <BuenosNegocios />
            <AsistenteVirtualIa />
            <Chat />
            <ActasItalianas />
            <Plumarii />
            <Lonely />
            <EncryptedChat />
            <Varios />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
