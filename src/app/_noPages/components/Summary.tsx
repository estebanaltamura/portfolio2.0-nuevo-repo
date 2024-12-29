;

import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Summary: React.FC<{
  summary: {
    stack: string[];
    text: string;
    projectId: string;
  };
}> = ({ summary }) => {
  const router = useNavigate();

  const { stack, text, projectId } = summary;

  const goToProjectClickHandler = (projectId: string) => {
    router(`/project-detail/${projectId}`);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '26px 20px',
        borderRadius: '16px',
        border: '1px solid #6E65A7',
        marginTop: '30px',
        backgroundColor: '#333238',
      }}
    >
      <Box
        sx={{
          color: 'white',
          fontSize: '20px',
          fontWeight: '600',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        Proyecto vinculado a la experiencia
      </Box>
      <Typography
        sx={{
          fontSize: '14px',
          color: 'white',
          fontWeight: '600',
          marginTop: '20px',
        }}
      >
        Tecnologías implementadas en el proyecto
      </Typography>
      <Typography
        sx={{
          color: '#bababa',
          fontSize: '14px',
          fontWeight: '400',
          marginTop: '5px',
        }}
      >
        {stack.join(', ')}
      </Typography>
      <Typography
        sx={{
          color: 'white',
          fontSize: '14px',
          fontWeight: '600',
          marginTop: '20px',
        }}
      >
        Aplicación de las tecnologías
      </Typography>
      <Typography
        sx={{
          color: '#bababa',
          fontSize: '14px',
          fontWeight: '400',
          marginTop: '5px',
        }}
      >
        {text}
      </Typography>
      <Button
        onClick={() => goToProjectClickHandler(projectId)}
        sx={{
          width: 'fit-content',
          padding: '7px 14px',
          borderRadius: '6px',
          textAlign: 'center',
          backgroundColor: '#6e65a7',
          fontSize: '12px',
          color: 'white',
          margin: '20px auto 0 auto',
          '&:hover': {
            backgroundColor: '#524CAC',
          },
        }}
      >
        Ir al detalle del proyecto
      </Button>
    </Box>
  );
};

export default Summary;
