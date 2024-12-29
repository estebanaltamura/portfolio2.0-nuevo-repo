import { Box, Typography, useMediaQuery } from "@mui/material";
import { aboutMe } from "JSONs/JSONprojects";
import MuiAvatar from '@mui/material/Avatar';


const AboutMe = () => {
  const isMobile = useMediaQuery('(max-width:600px)');  

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '467px',
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
          <img src='/icons/aboutMeIcon.svg' alt='' style={{position:'relative', top:'0px', color:'white', width:'20px', height:'20px'}} />
        </Box>
        <Typography
          sx={{
            fontSize: '18px',
            fontWeight: '600',
            color: 'white',
            marginTop: '2px',
            flexGrow: 1,
          }}
        >
          Acerca de mi
        </Typography>
          
            
      </Box>
      {/*Body */}        
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column'          
        }}>
          {
            aboutMe.map((text, index) => {
              return (<Typography key={index} sx={{fontSize:'16px', lineHeight:'25px', marginTop:'18px'}}>{text}</Typography>);
            })
          }
        </Box>
    </Box>
  );
};

export default AboutMe;