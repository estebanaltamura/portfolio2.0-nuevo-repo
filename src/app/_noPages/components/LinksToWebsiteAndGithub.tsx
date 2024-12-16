import { Box, Typography } from '@mui/material';

interface ILinksToWebsiteAndGithubProps {
  links: { website?: string; github?: string; instagram?: string };
  marginBottom: number;
  marginTop: number;
}

const LinksToWebsiteAndGithub: React.FC<ILinksToWebsiteAndGithubProps> = ({
  links,
  marginBottom,
  marginTop,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        marginBottom: `${marginBottom}px`,
        marginTop: `${marginTop}px`,
        gap: '25px',
      }}
    >
      {links.website && (
        <a
          href={links.website}
          target='_blank'
          rel='noopener noreferrer'
          style={{ cursor: 'pointer' }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <img
              src='/icons/worldIcon.svg'
              alt=''
              style={{ width: '16px', height: '16px' }}
            />
            <Typography
              sx={{ fontSize: '16px', fontWeight: '600', color: 'white' }}
            >
              Website
            </Typography>
          </Box>
        </a>
      )}

      {links.instagram && (
        <a
          href={links.instagram}
          target='_blank'
          rel='noopener noreferrer'
          style={{ cursor: 'pointer' }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <img
              src='/icons/worldIcon.svg'
              alt=''
              style={{ width: '16px', height: '16px' }}
            />
            <Typography
              sx={{ fontSize: '16px', fontWeight: '600', color: 'white' }}
            >
              Instagram
            </Typography>
          </Box>
        </a>
      )}

      {links.github && (
        <a
          href={links.github}
          target='_blank'
          rel='noopener noreferrer'
          style={{ cursor: 'pointer' }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <img
              src='/icons/gitHubIcon.svg'
              alt=''
              style={{ width: '16px', height: '16px' }}
            />
            <Typography
              sx={{ fontSize: '16px', fontWeight: '600', color: 'white' }}
            >
              Github
            </Typography>
          </Box>
        </a>
      )}
    </Box>
  );
};

export default LinksToWebsiteAndGithub;
