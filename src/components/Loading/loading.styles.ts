import { keyframes } from "styled-components";
import { styled } from 'styled-components';

const LoadingAnimation = keyframes`
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
`;

export const LoadingContainer = styled.div`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const LoadingItems = styled.div`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
`;

export const LoadingDiv = styled.div`
  display: inline-block;
  position: absolute;
  left: 10px;
  width: 16px;
  background-color: #F8FDFA;
  animation: ${LoadingAnimation} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
`;

export const LoadingDiv1 = styled(LoadingDiv)`
  left: 8px;
  animation-delay: -0.24s;
`;

export const LoadingDiv2 = styled(LoadingDiv)`
  left: 32px;
  animation-delay: -0.12s;
`;

export const LoadingDiv3 = styled(LoadingDiv)`
  left: 56px;
  animation-delay: 0;
`;
