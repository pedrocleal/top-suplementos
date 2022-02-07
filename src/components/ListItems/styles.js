import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  max-width: 1300px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-top: 32px;
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .header {
    img {
      height: 150px;
    }
    border-radius: 20px 20px 0 0;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.yellow};
  }

  .product-info {
    border-radius: 0 0 20px 20px;
    padding: 16px;
    background: ${({ theme }) => theme.colors.blue};
    
    h3 {
      font-size: 24px;
      color: #fff;
    }

    p {
      margin-top: 8px;
      color: ${({ theme }) => theme.colors.yellow};
      font-weight: bold;
      font-size: 14px;
    }

    .price {
      margin-top: 8px;

      span {
        display: block;
        color: #fff;

        &:nth-child(2) {
          font-size: 24px;
        }
      }
    }

    .actions {
      button {
        margin-right: 12px;
        padding: 8px 16px;

        &:nth-child(2) {
          background: ${({ theme }) => theme.colors.red};
        }
      }
      margin-top: 12px;
    }
    
  }

`