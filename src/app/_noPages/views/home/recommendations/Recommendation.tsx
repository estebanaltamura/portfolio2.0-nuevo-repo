
import { Box } from "@mui/material";
import RecommendationsCarousel from "app/_noPages/components/RecommentationsCarousel";
import { v4 as uuidv4 } from 'uuid';


const Recommendations = () => {

  const recommendations = ["hola"]
  

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      maxWidth: '467px',
      height: 'fit-content',
      marginTop: '35px',
      padding: '35px 16px 24px',
      alignItems: 'center',
      borderRadius: '16px',
      border: '1px solid #494949',
      color: 'white',
      overflow: 'hidden',
      '@media(min-width: 1200px)': {
        padding: 'px 32px 32px 32px',
        maxWidth: '1021px',
        maxHeight: '608px',
      },
    }}>
      <RecommendationsCarousel recommendations={recommendations}/>
    </Box>
  )

}

export default Recommendations