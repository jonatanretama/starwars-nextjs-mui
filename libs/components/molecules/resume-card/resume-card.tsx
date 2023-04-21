import { Box } from '@mui/material';
import { stringToSlug } from '@utils/string-to-slug';
import Image from 'next/image';
import type { FC } from 'react';
import { useRouter } from 'next/router';

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
    <Box
      data-testid="resume-card"
      sx={{
        width: { xs: '100%', md: 200, xl: 300 },
        height: { xs: 300, md: 300, xl: 400 },
        bgcolor: 'primary.dark',
        display: 'flex',
        borderRadius: { xs: '20px 20px 0 0', sm: '20px 20px 0 20px' },
        filter: 'drop-shadow(1px 0px 10px rgba(200, 200, 200, 0.3))',
      }}
      onClick={() => pushTo()}>
      <Box sx={{ width: '100%', height: '100%' }}>
        <Image
          priority
          src={customSrc}
          alt={`Picture of ${name}`}
          quality={50}
          width={600}
          height={600}
          blurDataURL={customSrc}
          sizes="(max-width: 768px) 100vw,
                (min-width: 1200px) 50vw,
                33vw"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top',
            borderRadius: '20px 20px 0 20px',
          }}
        />
        {`${title ?? name}`}
      </Box>
    </Box>
  );
};
