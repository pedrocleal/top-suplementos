import styled, { keyframes } from 'styled-components';

const show = keyframes`
  from {
    opacity: 0.5;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: #FFFFFFC2;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  margin-top: 100px;
  margin-left: 24px;  
  margin-right: 24px;  
  max-width: 800px;
  width: 100%;
  padding: 24px;
  padding-top: 72px;
  height: 500px;
  background: #fafafa;
  border-radius: 15px;
  box-shadow: 0px 4px 4px 0px #00000040;
  
  display: flex;
  align-items: center;
  flex-direction: column;

  .emoji {
    font-size: 52px;
    animation: ${show} 0.8s ease-out;
  }

  h1 {
    font-size: 72px;
    color: ${({ theme }) => theme.colors.blue};
    animation: ${show} 0.6s ease-out;
  }

  span {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.red};
    font-weight: bold;
    animation: ${show} 0.8s ease-out;
  }

  .social {
    display: flex;
    margin-top: 32px;

    a {
      color: ${({ theme }) => theme.colors.blue};
    }
    
    & > * {
      margin-right: 12px;
      font-size: 24px;
    }
    animation: ${show} 1s ease-out;
  }

  .button {
    text-decoration: none;
    padding: 8px 16px;
    margin-top: 32px;
    color: #fff;
    background: ${({ theme }) => theme.colors.yellow};
    border: 2px solid ${({ theme }) => theme.colors.yellow};
    border-radius: 4px;
    font-size: 24px;
    font-weight: bold;
    transition: all 0.2s ease-in;

    &:hover {
      color: ${({ theme }) => theme.colors.yellow};
      background: #fff;
    }
    animation: ${show} 1.2s ease-out;
  }
`;
