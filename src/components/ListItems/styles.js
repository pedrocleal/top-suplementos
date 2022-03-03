import styled from 'styled-components';

export const Container = styled.div`
  margin: 24px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;

  h1 {
    @media (max-width: 780px) {
      font-size: 24px;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
  margin: 32px;
  
  @media (max-width: 1380px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 1080px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Item = styled.div`
  display: flex;
  max-width: 320px;
  width: 100%;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow-y: hidden;

  @media (max-width: 680px) {
    max-width: 250px;
  }
  @media (max-width: 450px) {
    max-width: 200px;
  }

  a {
    text-decoration: none;
    margin-right: 16px;
    width: 100%:
    border: 1px solid #01ad00;
    outline: none;
    padding: 11px 16px;
    background: #01B700;
    border-radius: 8px;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    transition: all 0.2s ease-in;

    &:hover {
      background: #01AD00;
    }

    &:active {
      background: #019A00;
    }
  }

  .header {
    img {
      height: 150px;

      @media (max-width: 680px) {
        height: 100px;
      }
    }
    border-radius: 15px 15px 0 0;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.yellow};
  }

  .product-info {
    border-radius: 0 0 15px 15px;
    padding: 16px;
    background: ${({ theme }) => theme.colors.blue};
    
    h3 {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 24px;
      color: #fff;
    }

    p {
      margin-top: 8px;
      color: ${({ theme }) => theme.colors.yellow};
      font-size: 14px;

      @media (max-width: 680px) {
        white-space: pre;
        overflow: hidden;
        font-size: 14px;
      }
    }

    .price {
      margin-top: 8px;

      span {
        display: block;
        color: #999;

        &:nth-child(2) {
          font-size: 24px;
          color: #fff
        }
      }
    }

    .actions {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 12px;

      a {
        text-align: center;
        width: 100%;
      }

      @media (max-width: 520px) {
        flex-direction: column;
        a {
          margin: 0; 
          text-align: center;
          width: 100%;
        }
      }

      button {
        padding: 8px 16px;

        &:nth-child(2) {
          background: ${({ theme }) => theme.colors.yellow};
          color: #fff;
          border:  1px solid ${({ theme }) => theme.colors.yellow};
          transition: all 0.2s ease-in;
          
          @media (max-width: 520px) {
            width: 100%;
            margin-top: 12px;
          }

          &:hover {
            background: transparent;
            color: ${({ theme }) => theme.colors.yellow};
          }
        }
      }
    }
    
  }

`;
