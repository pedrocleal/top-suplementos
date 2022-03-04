import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 52px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1080px;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkBlue};
    display: flex;
    align-items: center;

    span {
      margin-left: 8px;
    }
  }
`;
