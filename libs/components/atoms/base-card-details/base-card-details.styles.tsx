import { Box } from '@mui/material';
import styled from '@emotion/styled';
import { theme } from '@ui';

export const BaseCardDetailsWrapper = styled(Box)`
  display: flex;

  ${theme.breakpoints.up('xs')} {
    flex-direction: column;
    .base-img {
      border-radius: 20px 20px 0 0;
      flex-direction: column;
    }
    .content-wrapper {
      align-items: center;
      padding: 16px 0 16px 0;
    }
  }

  ${theme.breakpoints.up('sm')} {
    .base-img {
      border-radius: 20px 20px 0 20px;
      flex-direction: row;
    }
    .content-wrapper {
      align-items: flex-start;
      padding: 0 0 0 16px;
    }
  }

  ${theme.breakpoints.up('md')} {
    .content-wrapper {
      padding-left: 48px;
    }
  }

  ${theme.breakpoints.up('lg')} {
    flex-direction: row;
    .container-primary {
      width: 60%;
    }
  }

  ${theme.breakpoints.up('xl')} {
  }

  .container-primary {
    .base-img {
      background-color: ${theme.palette.primary.dark};
      display: flex;
      gap: 16px;
    }
    .shadow-container {
      filter: drop-shadow(1px 0px 10px rgba(200, 200, 200, 0.3));
    }
    .image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
      border-radius: 20px 20px 0 20px;
    }
    .content-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;
