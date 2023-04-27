import { Box, keyframes } from '@mui/material';
import styled from '@emotion/styled';

const colors = {
  red: 'rgb(253, 62, 62)',
  darkRed: 'rgb(193, 6, 6)',
  blue: 'rgb(53, 53, 249)',
  darkBlue: 'rgb(15, 15, 200)',
  green: 'rgb(50, 151, 50)',
  darkGreen: 'rgb(0, 93, 0)',
};

const rotate = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
`;

const correct = keyframes`
  0% {
    transform: rotateZ(360deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
`;

const changeBg1 = keyframes`
  0% {
    background-image: linear-gradient(
      to right,
      ${colors.darkBlue} 50%,
      ${colors.blue} 50%
    );
  }
  16.66% {
    background-image: linear-gradient(
      to right,
      ${colors.darkBlue} 50%,
      ${colors.blue} 50%
    );
  }
  16.67% {
    background-image: linear-gradient(
      to right,
      ${colors.blue} 50%,
      ${colors.darkBlue} 50%
    );
  }
  66.67% {
    background-image: linear-gradient(
      to right,
      ${colors.blue} 50%,
      ${colors.darkBlue} 50%
    );
  }
  66.68% {
    background-image: linear-gradient(
      to right,
      ${colors.darkBlue} 50%,
      ${colors.blue} 50%
    );
  }
  100% {
    background-image: linear-gradient(
      to right,
      ${colors.darkBlue} 50%,
      ${colors.blue} 50%
    );
  }
`;

const changeBg2 = keyframes`
  0% {
    background-image: linear-gradient(
      to right,
      ${colors.darkGreen} 50%,
      ${colors.green} 50%
    );
  }
  50% {
    background-image: linear-gradient(
      to right,
      ${colors.darkGreen} 50%,
      ${colors.green} 50%
    );
  }
  50.1% {
    background-image: linear-gradient(
      to right,
      ${colors.green} 50%,
      ${colors.darkGreen} 50%
    );
  }
  100% {
    background-image: linear-gradient(
      to right,
      ${colors.green} 50%,
      ${colors.darkGreen} 50%
    );
  }
`;

const changeBg3 = keyframes`
  0% {
    background-image: linear-gradient(
      to right,
      ${colors.red} 50%,
      ${colors.darkRed} 50%
    );
  }
  33.33% {
    background-image: linear-gradient(
      to right,
      ${colors.red} 50%,
      ${colors.darkRed} 50%
    );
  }
  33.34% {
    background-image: linear-gradient(
      to right,
      ${colors.darkRed} 50%,
      ${colors.red} 50%
    );
  }
  83.34% {
    background-image: linear-gradient(
      to right,
      ${colors.darkRed} 50%,
      ${colors.red} 50%
    );
  }
  83.35% {
    background-image: linear-gradient(
      to right,
      ${colors.red} 50%,
      ${colors.darkRed} 50%
    );
  }

  100% {
    background-image: linear-gradient(
      to right,
      ${colors.red} 50%,
      ${colors.darkRed} 50%
    );
  }
`;

const updateIndex = keyframes`
  0% {
    z-index: -1;
  }

  33% {
    z-index: -1;
  }

  34% {
    z-index: 2;
  }

  100% {
    z-index: 999;
  }
`;

const scale1 = keyframes`
  0% {
    background-color: ${colors.blue};
    transform: scaleX(0.33);
  }
  16.66% {
    background-color: ${colors.blue};
    transform: scaleX(1);
  }
  41.66% {
    background-color: ${colors.blue};
    transform: scaleX(0);
  }
  41.67% {
    background-color: ${colors.darkBlue};
    transform: scaleX(0);
  }
  66.66% {
    background-color: ${colors.darkBlue};
    transform: scaleX(1);
  }
  91.66% {
    background-color: ${colors.darkBlue};
    transform: scaleX(0);
  }
  91.67% {
    background-color: ${colors.blue};
    transform: scaleX(0);
  }
  100% {
    background-color: ${colors.blue};
    transform: scaleX(0.33);
  }
`;

const scale2 = keyframes`
  0% {
    background-color: ${colors.darkGreen};
    transform: scaleX(1);
  }
  24.9% {
    background-color: ${colors.darkGreen};
    transform: scaleX(0);
  }
  25% {
    background-color: ${colors.green};
    transform: scaleX(0);
  }
  50% {
    background-color: ${colors.green};
    transform: scaleX(1);
  }
  74.9% {
    background-color: ${colors.green};
    transform: scaleX(0);
  }
  75% {
    background-color: ${colors.darkGreen};
    transform: scaleX(0);
  }
  100% {
    background-color: ${colors.darkGreen};
    transform: scaleX(1);
  }
`;

const scale3 = keyframes`
  0% {
    background-color: ${colors.red};
    transform: scaleX(0.33);
  }
  8.33% {
    background-color: ${colors.red};
    transform: scaleX(0);
  }
  8.34% {
    background-color: ${colors.darkRed};
    transform: scaleX(0);
  }
  33.34% {
    background-color: ${colors.darkRed};
    transform: scaleX(1);
  }
  58.34% {
    background-color: ${colors.darkRed};
    transform: scaleX(0);
  }
  58.35% {
    background-color: ${colors.red};
    transform: scaleX(0);
  }
  83.35% {
    background-color: ${colors.red};
    transform: scaleX(1);
  }
  100% {
    background-color: ${colors.red};
    transform: scaleX(0.33);
  }
`;

export const PlanetContainer = styled(Box)`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  transform: scaleX(5);

  .sun {
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: rgb(254, 242, 131);
    box-shadow: 0 0 50px rgba(255, 239, 100, 0.6), 0 0 100px rgb(255, 239, 100);
    transform: scaleX(0.2);
  }

  .planet-container {
    position: absolute;
    width: 100%;
    height: 100%;
    animation: ${rotate} 12s linear infinite;
  }

  .root {
    position: absolute;
    animation: ${correct} 12s linear infinite;
  }

  #root1 {
    left: -21px;
    top: 15px;
  }

  #root2 {
    left: calc(50% - 30px);
    bottom: -35px;
  }

  #root3 {
    right: -21px;
    top: 15px;
  }

  .planet {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    transform: scaleX(0.2);
  }

  #planet1 {
    animation: ${changeBg1} 12s linear infinite;
  }

  #planet2 {
    animation: ${changeBg2} 12s linear infinite;
  }

  #planet3 {
    animation: ${changeBg3} 12s linear infinite;
  }
  .index {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  #index1 {
    animation: ${updateIndex} 12s linear infinite;
  }

  #index2 {
    animation: ${updateIndex} 12s linear 4s infinite;
  }

  #index3 {
    animation: ${updateIndex} 12s linear 8s infinite;
  }
  .planet::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  #planet1::after {
    animation: ${scale1} 12s linear infinite;
  }

  #planet2::after {
    animation: ${scale2} 12s linear infinite;
  }

  #planet3::after {
    animation: ${scale3} 12s linear infinite;
  }

  @media (max-width: 767px) {
    width: 70px;
    height: 70px;
    .sun {
      width: 70px;
      height: 70px;
    }

    .planet {
      width: 30px;
      height: 30px;
    }

    #root1 {
      left: -14px;
      top: 10px;
    }

    #root2 {
      left: calc(50% - 20px);
      bottom: -20px;
    }

    #root3 {
      right: -14px;
      top: 10px;
    }
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    .sun {
      width: 50px;
      height: 50px;
    }
    .planet {
      width: 20px;
      height: 20px;
    }
    #root1 {
      left: -10px;
      top: 6px;
    }
    #root2 {
      left: calc(50% - 14px);
      bottom: -14px;
    }
    #root3 {
      right: -10px;
      top: 6px;
    }
  }
`;
