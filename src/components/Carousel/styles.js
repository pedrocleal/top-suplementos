import styled from 'styled-components';

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
    padding: 52px;
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

    a {
      text-decoration: none;
      width: 400px;
      border: 1px solid #01ad00;
      outline: none;
      padding: 8px 24px;
      background: #01B700;
      border-radius: 8px;
      color: #fff;
      font-weight: bold;
      font-size: 16px;
      transition: all 0.2s ease-in;
  
      &:hover {
        background: #01AD00;
      }
  
      &:active {
        background: #019A00;
      }
    }
  }
`;
