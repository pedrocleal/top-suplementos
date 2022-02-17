import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-top: 72px;
  height: 100%;

  h2 {
    color: ${({ theme }) => theme.colors.blue};
    margin-bottom: 16px;
  }

  .box {
    h3 {
      margin: 8px 0;
      font-size: 20px;
      color: ${({ theme }) => theme.colors.red}
    }

    button {
      display: block;
      background: transparent;
      border: none;
      margin: 12px 0;
      font-size: 16px;
    }
  }
`;
