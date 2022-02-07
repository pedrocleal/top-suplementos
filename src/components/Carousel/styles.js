import styled, { keyframes } from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start; 
  margin: 0 auto;
  overflow-x: scroll;
  background: ${({ theme }) => theme.colors.darkBlue};
  
  img {
    height: 450px;
  }
`;

export const Item = styled.div`
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 52px 50px;

  img {
    margin-left: 152px;
  }

  .info {
    margin-left: 52px;
    h2 {
      color: #fff;
      font-size: 52px;
    }

    p {
      color: ${({ theme }) => theme.colors.yellow};
      font-size: 24px;
      margin-bottom: 16px;
      width: 80%;
    }
  }
`