;

import { Box, Typography } from '@mui/material';
import CustomCarousel from 'app/_noPages/components/CustomCarousel';
import ExperienceDetailImage from 'app/_noPages/components/ExperienceDetailImage';
import ExperienceDetailVideo from 'app/_noPages/components/ExperienceDetailVideo';
import LinksToWebsiteAndGithub from 'app/_noPages/components/LinksToWebsiteAndGithub';
import ProjectStack from 'app/_noPages/components/ProjectStack';
import { projects } from 'JSONs/JSONprojects';
import React from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const router = useNavigate();
  const params = useParams<{ id: string }>(); 
  const id: string | undefined = params.id;

  const backToHomeButtonHandler = () => {
    router('/');
  };

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  if (!id || typeof id !== 'string') {
    router('/not-found');
    return null;
  }

  const isKnownId = projects.map((experience) => experience.id).includes(id);

  if (!isKnownId) {
    router('/not-found');
    return null;
  }

  const experience = projects.find((experience) => experience.id === id);

  if (!experience) {
    router('/error');
    return null;
  }

  const period = experience.period;
  const name = experience.name;
  const role = experience.role;
  const details = experience.details;

  const formatText = (detail: string) => {
    const parts = detail.split(/(<b>.*?<\/b>)/g);
    return parts.map((part, index) => {
      if (part.startsWith('<b>') && part.endsWith('</b>')) {
        return <>{part.slice(3, -4)}</>;
      }
      return part;
    });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        position: 'relative',
        top: '-30px',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: '850px',
          marginTop: '60px',
          '@media(min-width: 1200px)': {
            marginTop: '0px',
          },
        }}
      >
        <Box
          onClick={backToHomeButtonHandler}
          sx={{
            display: 'flex',
            position: 'absolute',
            width: '40px',
            height: '40px',
            justifyContent: 'center',
            alignItems: 'center',
            top: '-50px',
            left: '0px',
            borderRadius: '100px',
            border: '1px solid #8C8C8C',
            cursor: 'pointer',
            '@media(min-width: 1200px)': {
              top: '25px',
              left: '-160px',
            },
          }}
        >
          <svg
            width='17'
            height='17'
            color='white'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='m12 19-7-7 7-7'></path>
            <path d='M19 12H5'></path>
          </svg>
        </Box>

        <Typography
          variant='h1'
          sx={{
            fontSize: '30px',
            color: 'white',
            fontWeight: '600',
            marginTop: '25px',
          }}
        >
          {name}
        </Typography>

        <Typography
          variant='body1'
          sx={{
            fontSize: '17px',
            color: 'white',
            marginTop: '2px',
            fontWeight: '600',
          }}
        >
          {role}
        </Typography>

        <Typography
          variant='body1'
          sx={{
            fontSize: '14px',
            lineHeight: '14px',
            color: '#8C8C8C',
            marginTop: '6px',
          }}
        >
          {period}
        </Typography>

        {details &&
          details.map((detail, index) => {
            if (typeof detail === 'string') {
              const fisrtString = index === 0;
              const isaRegularText = detail.slice(0, 3) !== '<b>';
              const isaYearTitle =
                detail.slice(0, 3) === '<b>' &&
                typeof details[index + 1] === 'string' &&
                (details[index + 1] as string).slice(0, 3) === '<b>';

              const isaTitleAfterYear =
                detail.slice(0, 3) === '<b>' &&
                typeof details[index - 1] === 'string' &&
                (details[index - 1] as string).slice(0, 3) === '<b>';

              const isaRegularTitle =
                detail.slice(0, 3) === '<b>' && !isaYearTitle;

              return (
                <Typography
                  key={index}
                  variant='body1'
                  sx={{
                    fontSize: isaRegularText
                      ? '16px'
                      : isaYearTitle
                      ? '24px'
                      : isaRegularTitle
                      ? '18px'
                      : '',
                    fontWeight: isaRegularText
                      ? '400'
                      : isaYearTitle
                      ? '600'
                      : isaRegularTitle
                      ? '600'
                      : '',
                    color:
                      isaYearTitle || isaRegularTitle ? 'white' : '#bababa',
                    lineHeight: '25px',
                    marginTop: fisrtString
                      ? '40px'
                      : isaRegularText
                      ? '10px'
                      : isaTitleAfterYear
                      ? '5px'
                      : isaRegularTitle
                      ? '30px'
                      : isaYearTitle
                      ? '40px'
                      : '',
                  }}
                >
                  {formatText(detail).map((part, index) => (
                    <React.Fragment key={index}>{part}</React.Fragment>
                  ))}
                </Typography>
              );
            }
            if (detail.type === 'link') {
              return (
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  key={index}
                  href={detail.href}
                  style={{
                    textDecoration: 'underline',
                    width: '100%',
                    height: detail.height,
                    marginTop: detail.marginTop,
                    marginBottom: detail.marginBottom,
                    fontSize: '14px',
                    textAlign: detail.textAlign,
                  }}
                >
                  {detail.text}
                </a>
              );
            }

            if (detail.type === 'image') {
              return (
                <ExperienceDetailImage
                  key={index}
                  src={detail.src}
                  srcMobile={detail.mobileVersionSrc}
                  width={detail.width}
                  height={detail.height}
                  marginTop={detail.marginTop}
                  marginBottom={detail.marginBottom}
                  imageDescription={detail.imageDescription}
                  widthImageDescription={detail.widthImageDescription}
                />
              );
            }

            if (detail.type === 'video') {
              return (
                <ExperienceDetailVideo
                  key={index}
                  src={detail.src}
                  width={detail.width}
                  height={detail.height}
                  imageDescription={detail.imageDescription}
                  marginTop={detail.marginTop}
                  marginBottom={detail.marginBottom}
                  widthImageDescription={detail.widthImageDescription}
                />
              );
            }

            if (detail.type === 'carousel') {
              return (
                <CustomCarousel
                  key={index}
                  desktopSrcImages={detail.desktopSrcImages}
                  mobileSrcImages={detail.mobileSrcImages}
                  greaterThan600Mode={detail.greaterThan600Mode}
                  mobileMode={detail.mobileMode}
                  customWidthgreaterThan600Mode={
                    detail.customWidthgreaterThan600Mode
                  }
                  customWidthMobile={detail.customWidthMobile}
                  marginBottom={detail.marginBottom}
                  marginTop={detail.marginTop}
                />
              );
            }
            if (detail.type === 'stack') {
              return (
                <ProjectStack
                  key={index}
                  stack={detail.stack}
                  marginBottom={detail.marginBottom}
                  marginTop={detail.marginTop}
                />
              );
            }

            if (detail.type === 'linksToWebsiteAndGithub') {
              return (
                <LinksToWebsiteAndGithub
                  key={index}
                  links={detail.links}
                  marginBottom={detail.marginBottom}
                  marginTop={detail.marginTop}
                />
              );
            }
            if (detail.type === 'title') {
              return (
                <Typography
                  key={index}
                  sx={{
                    fontSize: '18px',
                    color: 'white',
                    fontWeight: '600',
                    marginTop: `${detail.marginTop}px`,
                    marginBottom: `${detail.marginBottom}px`,
                  }}
                >
                  {detail.title}
                </Typography>
              );
            }

            if (detail.type === 'title2') {
              return (
                <Typography
                  key={index}
                  sx={{
                    fontSize: '30px',
                    color: 'white',
                    fontWeight: '600',
                    marginTop: `${detail.marginTop}px`,
                    marginBottom: `${detail.marginBottom}px`,
                  }}
                >
                  {detail.title}
                </Typography>
              );
            }
          })}
      </Box>
    </Box>
  );
};

export default ProjectDetail;

