import { Box } from '@mui/material';
import type { FC } from 'react';
import Image from 'next/image';
import { BottomTitleCard } from '@atoms';
import { stringToSlug } from '@utils/string-to-slug';
import { TResultsAttrs } from '@models';
import { BaseCardDetailsWrapper } from './base-card-details.styles';

export type TBaseCardDetailsProps = {
  children: React.ReactNode;
  data: TResultsAttrs;
  actualPage: string;
};

export const BaseCardDetails: FC<TBaseCardDetailsProps> = ({
  children,
  data,
  actualPage,
}) => {
  const label = 'name' in data ? data.name : data.title;
  return (
    <BaseCardDetailsWrapper>
      <Box className="container-primary">
        <Box className="base-img">
          <Box
            className="shadow-container"
            sx={{
              width: { xs: '100%', sm: '60%', md: 400, xl: 400 },
            }}>
            <Box
              sx={{
                height: { xs: 350, md: 300, xl: 400 },
                clipPath: {
                  xs: 'polygon(100% 0, 100% 90%, 50% 100%, 0 90%, 0 0)',
                  sm: 'polygon(90% 0%, 100% 50%, 90% 100%, 0% 100%, 0% 0%)',
                  xl: 'polygon(100% 70%, 98% 60%, 98% 40%, 100% 30%, 100% 0, 0 0, 0 100%, 100% 100%)',
                },
              }}>
              <Image
                priority
                src={`/images/${actualPage}/${stringToSlug(label)}.jpg`}
                alt={`picture of ${label}`}
                quality={50}
                width={600}
                height={600}
                blurDataURL={`/images/${actualPage}/${stringToSlug(label)}.jpg`}
                className="image"
              />
            </Box>
          </Box>
          <Box className="content-wrapper">{children}</Box>
        </Box>
        <BottomTitleCard name={label} />
      </Box>
      <Box bgcolor="tomato">Card</Box>
    </BaseCardDetailsWrapper>
  );
};
