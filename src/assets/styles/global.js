import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    font-family: 'Smooch Sans', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    background: ${({ theme }) => theme.colors.backgroundColor};
    position: relative;
  }

  button {
    cursor: pointer;
  }
`;
