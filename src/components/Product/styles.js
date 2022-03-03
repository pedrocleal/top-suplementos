import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  border-radius: 10px;
  margin-top: 16px;
  background: #fff;
  width: 100%;
  max-width: 1080px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;

  @media (max-width: 580px) {
    flex-direction: column;
    max-width: 300px;
    margin-bottom: 24px;
  }

  .left {
    width: 50%; 
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.yellow};
    padding: 24px;
    border-radius: 10px 0 0 10px;

    @media (max-width: 580px) {
      width: 100%;
      border-radius: 10px 10px 0 0;
    }

    img {
      height: 500px;
      @media (max-width: 800px) {
        height: 300px;
      }

      @media (max-width: 580px) {
        height: 200px;
      }
    }
  }

  .right {
    padding: 52px;
    width: 50%;

    @media (max-width: 1200px) {
      padding: 32px;
    }

    @media (max-width: 580px) {
      width: 100%;
      border-radius: 0px 0px 10px 10px
    }
    
    h1 {
      color: ${({ theme }) => theme.colors.red};
      font-size: 52px;

      @media (max-width: 800px) {
        font-size: 32px;
      }
    }

    p {
      color: ${({ theme }) => theme.colors.blue};
      font-size: 24px;
      margin-bottom: 36px;
      @media (max-width: 800px) {
        font-size: 16px;
        margin-bottom: 24px;
      }
    }

    span {
      display: block;
      color: #999;
      font-weight: bold;
      font-size: 24px;
    }

    .big {
      font-size: 52px;
      color: ${({ theme }) => theme.colors.blue};

      @media (max-width: 1200px) {
        font-size: 42px;
      }
    }

    .actions {
      display: flex;
      flex-direction: column;
      
      button {
        margin-top: 8px;
        font-size: 24px;
      }

      .cart {
        background: ${({ theme }) => theme.colors.yellow};
        color: #fff;
        border:  1px solid ${({ theme }) => theme.colors.yellow};
        transition: all 0.2s ease-in;

        &:hover {
          background: #fff;
          color: ${({ theme }) => theme.colors.yellow};
        }
      }
    }
  }
`;

export const ContainerNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 52px;
  
  h1 {
    font-size: 52px;
    color: ${({ theme }) => theme.colors.red}
  }
`;
