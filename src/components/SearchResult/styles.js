import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 52px;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.blue};
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      margin-left: 4px;
    }
  }

  .result {
    width: 100%;
    margin-top: 24px;
    display: flex;
    align-items: center
    justify-content: center;
  }
¨`;

export const Item = styled.div`
  margin-right: 24px;
  display: flex;
  min-height: 100%;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  a {
    text-decoration: none;
    margin-right: 16px;
    width: 100%:
    border: 1px solid #01ad00;
    outline: none;
    padding: 8px 16px;
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
      button {
        margin-right: 12px;
        padding: 8px 16px;

        &:nth-child(2) {
          background: transparent;
          color: ${({ theme }) => theme.colors.yellow};
          border:  1px solid ${({ theme }) => theme.colors.yellow};
          transition: all 0.2s ease-in;

          &:hover {
            background: ${({ theme }) => theme.colors.yellow};
            color: #fff;
          }
        }
      }
    margin-top: 12px;
  } 
}`;

export const NotFound = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ddd;

  a {
    font-size: 24px;
    margin: 12px 0;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.red};
    font-weight: bold;
    transition: all 0.2s ease-in;

    &:hover {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
  `;
