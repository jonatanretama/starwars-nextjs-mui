/* eslint-disable prettier/prettier */
import { Box, css } from '@mui/material';
import styled from '@emotion/styled';
import { theme } from '@ui';

type TResumeCardStyledProps = {
  title?: string;
};


export const ResumeCardStyled = styled(Box) <TResumeCardStyledProps>`
  ${({ title }) =>
    title
      ? css`
          clip-path: polygon(0 0, 100% 0, 100% 100%, 95% 100%, 90% 95%, 70% 95%, 65% 100%, 0 100%);
          /* filter: drop-shadow(1px 0px 10px rgba(200, 200, 200, 0.3)); */
          ${theme.breakpoints.up('xs')} {
            width: 80%;
            height: 300px;
            /* border-radius: 20px 20px 0 0; */
          }
          ${theme.breakpoints.up('sm')} {
            /* border-radius: 20px 20px 0 20px; */
          }
          ${theme.breakpoints.up('md')} {
            width: calc(100% / 3);
          }
          ${theme.breakpoints.up('xl')} {
            width: calc(100% / 4);
            height: 300px;
          }
          .title-container {
            text-transform: lowercase;
            letter-spacing: 3px;
          }
        `
      : css`
          clip-path: polygon(0 0, 100% 0, 100% 100%, 95% 100%, 90% 97%, 55% 97%, 50% 100%, 0 100%);
          .title-container {
            align-items: center;
          }
          ${theme.breakpoints.only('xs')} {
            width: 80%;
            height: 400px;
            .title {
              margin-left: 20px;
              font-size: 1rem;
            }
            .droid {
              margin-right: 20px;
            }
          };
          ${theme.breakpoints.up('sm')} {
            /* border-radius: 20px 20px 0 20px; */
            /* width: 200px; */
            width: calc(100% / 3);
            height: 400px;
          };
          ${theme.breakpoints.up('md')} {
            /* width: 200px; */
            width: calc(100% / 4);
          };
          ${theme.breakpoints.up('lg')} {
            /* width: 200px; */
            width: calc(100% / 5);
          };
          ${theme.breakpoints.up('xl')} {
            /* width: 300px; */
            width: calc(100% / 6);
            height: 400px;
          };
        `}
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background: #000000;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #181717, #232323);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #181717, #232323); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    &:hover {
      cursor: pointer;
      .droid {
        transition: 0.3s;
        color: ${theme.palette.primary.contrastText};
        text-shadow:
        0 0 7px ${theme.palette.primary.contrastText},
        0 0 10px ${theme.palette.primary.contrastText},
        0 0 21px ${theme.palette.primary.contrastText},
        0 0 42px ${theme.palette.primary.main},
        0 0 82px ${theme.palette.primary.main},
        0 0 92px ${theme.palette.primary.main};
      }
      .title {
        transition: 0.3s;
        color: ${theme.palette.primary.contrastText};
        text-shadow:
        0 0 3px ${theme.palette.primary.contrastText};
      }
    }
    .image-container {

    }
    .title-container {
      color: ${theme.palette.primary.contrastText}!important;
      height: 35%;
      display: flex;
      justify-content: space-between;
      align-items: left;
      padding: 10px;
      position: relative;
    }
    .image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
      border-radius: 8px 8px 0 0;
    }

`;
