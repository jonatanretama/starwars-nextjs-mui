import { Box, Typography } from '@mui/material';
import { stringToSlug } from '@utils/string-to-slug';
import Image from 'next/image';
import type { FC } from 'react';
import { useRouter } from 'next/router';
import { ResumeCardStyled } from './resume-card.styles';

export type TResumeCardProps = {
  nameOrPath: string;
  id?: string;
  title?: string;
};

export const ResumeCard: FC<TResumeCardProps> = ({
  nameOrPath: name,
  id,
  title,
}) => {
  // TODO: Add syles and responsive
  const router = useRouter();
  const pathname = router.pathname;
  const actualPage = pathname.split('/')[1];
  const customSrc = id
    ? `/images/${actualPage}/${stringToSlug(name)}.jpg`
    : `/images/content/${name}.jpg`;

  const pushTo = () => {
    const dynamicPath = id ? `/${actualPage}/${id}` : `/${name}`;
    router.push({ pathname: dynamicPath });
  };

  return (
    <ResumeCardStyled
      data-testid="resume-card"
      onClick={() => pushTo()}
      title={title ?? undefined}>
      <Box sx={{ width: '100%', height: '75%' }} className="shadow">
        <Box sx={{ width: '100%', height: '100%' }} className="image-container">
          <Image
            className="image"
            src={customSrc}
            alt={`Picture of ${name}`}
            quality={50}
            width={600}
            height={600}
          />
        </Box>
        <Box className="title-container">
          <Typography
            className="title"
            variant={title ? 'h4' : 'body1'}
            sx={{ fontWeight: 'bold' }}>
            {`${title ?? name}`}
          </Typography>
          <Typography variant="h6" className="droid">
            SW
          </Typography>
        </Box>
      </Box>
    </ResumeCardStyled>
  );
};
