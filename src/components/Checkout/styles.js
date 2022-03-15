import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px;
  width: 100%;
  max-width: 1080px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px #00000040;

  h2 {
    color: ${({ theme }) => theme.colors.blue}
  }

  .subtotal {
    color: ${({ theme }) => theme.colors.darkBlue};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 24px 0;
    font-size: 24px;

    strong {
      margin-left: 8px;
      font-size: 32px;
    }
  }

  .total {
    margin-top: 28px;  
    display: flex;
    justify-content: flex-end;
    font-size: 42px;
    color: ${({ theme }) => theme.colors.blue};
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 24px;
    button {
      font-size: 24px;
    }
    // .secondary {
    //   margin-right: 12px;
    //   background: #fff;
    //   color: #01ad00;
    // }
  }
`;

export const ListCartItems = styled.div`
  margin-top: 24px;
  border: 1px solid #fff;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px #DFDFDF;
  margin-bottom: 16px;

  @media (max-width: 620px) {
    padding: 12px;
  }

  img {
    height: 80px;

    @media (max-width: 620px) {
      height: 60px;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    h3 {
      color: ${({ theme }) => theme.colors.red};
      font-size: 28px;

      @media (max-width: 620px) {
        font-size: 22px;
      }
    }

    p {
      font-size: 32px;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.blue};
      margin-bottom: 8px;
    }

    .actions {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      font-size: 20px;

      & > * {
        margin-right: 8px;
      }

      button {
        background: transparent;
        border: none;
        outline; none;
        margin-top: 4px;
      }
      
      span {
        font-size: 18px;
        font-weight: bold;
      }

      .trash {
        cursor: pointer;
        font-size: 18px;
      }
    }
  }
`;

export const FreteContainer = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: 22px;

  @media (max-width: 620px) {
    flex-direction: column;
  }

  .frete {
    .input {
      display: flex;

      span {
        @media (max-width: 620px) {
          font-size: 21px;
          display: flex;
          align-items: center;
        }
      }
      & > * {
        margin-right: 8px;
      }

      input {    
        text-align: center;
        padding: 4px;
        border: 1px solid #ddd;
        border-radius: 4px;
        outline: none;    
        font-size: 18px;
        max-height: 30px;
      }

      button {
        text-transform: uppercase;
        padding: 6px 16px;
        border: 1px solid #ddd;
        border-radius: 8px;
        background: #fff;
        transition: all 0.2s ease-in;
        color: #3D3D3D;
        font-weight: bold;
        font-size: 18px;
        max-height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
          background: ${({ theme }) => theme.colors.yellow};
          color: #000;
        }
        
        &:disabled {
          cursor: default;
          background: #ddd;
          color: #aaa;
        }
      }

    }
    .result {
      margin-top: 16px;
    }
  }

  .select-frete {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 620px) {
      margin-top: 24px;
      width: 100%;
      align-items: flex-start;
    }
    
    input {
      margin-right: 8px;
      height: 15px;
      width: 15px;
    }
  }
`;
