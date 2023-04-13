import { Box } from '@mui/material';
import Image from 'next/image';
import type { FC } from 'react';

export type TResumeCardProps = {
  name: string;
  id: string;
};

export const ResumeCard: FC<TResumeCardProps> = ({ name, id }) => {
  // TODO: Get name and id as props, then display the name under the image
  // TODO: Set dynamic image
  return (
    <Box
      sx={{
        width: { xs: '100%', md: 200, xl: 300 },
        height: { xs: 300, md: 300, xl: 400 },
        bgcolor: 'primary.dark',
        display: 'flex',
        borderRadius: { xs: '20px 20px 0 0', sm: '20px 20px 0 20px' },
        filter: 'drop-shadow(1px 0px 10px rgba(200, 200, 200, 0.3))',
      }}>
      <Box
        sx={{
          width: '100%',
          height: '100%',
        }}>
        {/* TODO: Set dynamic image with dynamic alt */}
        <Image
          priority
          src="/images/anakin-sky-walker.webp"
          alt="Imagen de Anakin Skywalker"
          quality={50}
          width={600}
          height={600}
          blurDataURL={'/images/anakin-sky-walker.webp'}
          sizes="(max-width: 768px) 100vw,
                (min-width: 1200px) 50vw,
                33vw"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '20px 20px 0 20px',
          }}
        />
      </Box>
    </Box>
  );
};
