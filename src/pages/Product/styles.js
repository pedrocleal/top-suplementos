import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  margin-top: 52px;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 1200px) {
    max-width: 800px;
  }

  @media (max-width: 800px) {
    max-width: 600px;
  }
  
  @media (max-width: 580px) {
    max-width: 300px;
  }

  a {
    width: 100%;
    max-width: 20px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.blue};
    font-size: 24px;
    font-weight: bold;
  
    span {
      margin-left: 4px;
    }
  }
`;
