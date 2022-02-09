import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  margin-top: 52px;
  display: flex;
  flex-direction: column;

  a {
    width: 100%;
    max-width: 20px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.blue};
    font-size: 18px;
  
    span {
      margin-left: 4px;
    }
  }
`;
