import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  margin-top: 52px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 72px;
    color: ${({ theme }) => theme.colors.blue};
  }

  h2 {
    font-size: 32px;
    margin: 24px 0;
  }

  p {
    font-size: 24px;
  }

  a {
    font-size: 24px;
    margin-top: 12px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.red};
    font-weight: bold;
    transition: all 0.2s ease-in;

    &:hover {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`;
