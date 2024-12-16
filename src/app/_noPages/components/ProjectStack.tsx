import { Box } from '@mui/material';

interface IProjectStackProps {
  stack: string[];
  marginBottom: number;
  marginTop: number;
}

const ProjectStack: React.FC<IProjectStackProps> = ({
  stack,
  marginBottom,
  marginTop,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        marginBottom: `${marginBottom}px`,
        marginTop: `${marginTop}px`,
      }}
    >
      {stack.map((stackItem, index) => {
        return (
          <Box
            key={index}
            sx={{
              padding: '4px 9px',
              borderRadius: '5px',
              border: '1px solid #6E65A7',
              backgroundColor: '#6E65A7',
              color: 'white',
              fontSize: '13px',
            }}
          >
            {stackItem}
          </Box>
        );
      })}
    </Box>
  );
};

export default ProjectStack;
