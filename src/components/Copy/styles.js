import styled from 'styled-components';

export const Container = styled.div`
  text-align: center; 
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.red};
  padding: 8px 50px;
  color: #fff;
  font-size: 24px;

  a {
    text-decoration: none;
    color: #fff;
    transition: all 0.2s ease;

    &:hover {
      font-size: 26px;
    }
  }
`;
