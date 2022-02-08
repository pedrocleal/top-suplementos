import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    font-family: 'Sora', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    background: ${({ theme }) => theme.colors.backgroundColor};
    overflow-x: hidden;
    position: relative;
  }

  button {
    cursor: pointer;
  }
`;
