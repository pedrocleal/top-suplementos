import styled, { keyframes } from 'styled-components';

const showCart = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  z-index: 1;
  max-height: 100%;
  overflow-y: auto;
  max-width: 400px;
  width: 100%;
  background: #fff;
  position: fixed;
  top: 0;
  right: 0;
  padding: 16px 24px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  animation: ${showCart} 0.2s ease-in;
  border-radius: 0px 0px 0px 20px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background: transparent;
      outline: none;
      border: none;
      
      svg {
        font-size: 24px;
      }
    }
  }

  .footer {
    margin-top: 32px;

    h1 {
      color: #4BDB4A;
    }

    .actions {
      margin-top: 16px;

      button {
        width: 100%;
        margin-bottom: 8px;
        font-size: 22px;

        &:nth-child(2) {
          background: #fff;
          color: #01B700;
          border: 1px solid #01B700;
          transition: all 0.2s ease-in;

          &:hover {
            background: #01B700;
            color: #fff;
          }
          
        }
      }
    }
  }
`;

export const CartItem = styled.div`
  background: #fff;
  padding: 8px 16px;
  margin: 24px 0;
  box-shadow: 0px 4px 4px #DFDFDF;
  border-radius: 10px;
  border: 2px solid red;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 80px;
  }

  .info {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    
    strong {
      color: ${({ theme }) => theme.colors.red}
    }

    span {
      color: ${({ theme }) => theme.colors.blue};
      font-size: 24px;
      font-weight: bold;
    }
  }

  .actions {

    & > * {
      margin-right: 8px;
    }

    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 8px;
    font-size: 20px;

    button {
      background: transparent;
      border: none;
      outline; none;
      margin-top: 4px;
    }

    span {
      font-size: 16px;
    }

    .trash {
      cursor: pointer;
    }
  }
`;
