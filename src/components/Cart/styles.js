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
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 580px) {
    max-width: 350px;
  }

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
    font-size: 24px;

    h1 {
      color: #4BDB4A;
    }

    .actions {
      margin-top: 16px;
      
      a {
        margin-bottom: 8px;

        display: flex;
        justify-content: center;
        text-decoration: none;
        border: 1px solid #01ad00;
        outline: none;
        padding: 8px 12px;
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
      }

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
