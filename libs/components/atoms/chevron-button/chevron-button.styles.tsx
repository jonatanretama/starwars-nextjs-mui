import { Box, keyframes } from '@mui/material';
import styled from '@emotion/styled';

const float = keyframes`
  0% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
	50% {
		box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
		transform: translatey(-20px);
	}
	100% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
`;

export const FloatingBox = styled(Box)`
  width: 50px;
  height: 50px;
  border-radius: 20%;
  border: 1px #fff solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${float} 6s ease-in-out infinite;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
