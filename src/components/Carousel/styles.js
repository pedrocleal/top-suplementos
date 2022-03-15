import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start; 
  margin: 0 auto;
  overflow-x: auto;
  background: ${({ theme }) => theme.colors.darkBlue};
  
  img {
    height: 400px;
    @media (max-width: 768px) {
      height: 300px;
    }
  }
`;

export const Item = styled.div`
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 52px 0;

  @media (max-width: 580px) {
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 850px) {
    padding: 32px;
  }

  img {
    @media (min-width: 850px) {
      margin-left: 158px;
    }
    @media (max-width: 580px) {
      height: 180px;
    }
    @media (max-width: 850px) {
      margin: 0;
    }
  }

  .info {
    h2 {
      color: #fff;
      font-size: 72px;

      @media (max-width: 850px) {
        font-size: 42px;
      }
    }

    p {
      color: ${({ theme }) => theme.colors.yellow};
      font-size: 32px;
      margin-bottom: 28px;
      width: 80%;
      @media (max-width: 850px) {
        font-size: 24px;
      }
      @media (max-width: 580px) {
        width: 100%;
      }
    }

    a {
      text-decoration: none;
      border: 1px solid #01ad00;
      outline: none;
      padding: 14px 32px;
      background: #01B700;
      border-radius: 8px;
      color: #fff;
      font-weight: bold;
      font-size: 24px;
      transition: all 0.2s ease-in;
  
      &:hover {
        background: #01AD00;
      }
  
      &:active {
        background: #019A00;
      }

      @media (max-width: 768px) {
        padding: 8px 16px;
        font-size: 16px;
      }
    }
  }
`;
