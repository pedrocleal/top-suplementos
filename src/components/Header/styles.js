import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  padding: 16px;
  background: ${({ theme }) => theme.colors.blue};

  img {
    heigth: 50px;
    width: 50px;
  }
`;

export const SearchContainer = styled.div`
  display: flex; 
  align-items: center;
  width: 400px;
  background #fff;

  img {
    margin-top: 4px;
    heigth: 30px;
    width: 30px;
    background: #fff;
  }
`;

export const SearchInput = styled.input`
  font-family: 'Sora', sans-serif;
  padding: 10px;
  width: 100%;
  max-width: 450px;
  border: none;
  outline: none;

  &:placeholder {
    color: #999;
  }
`;

export const CartContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;

  background: transparent;
  border: none;
  position: relative;

  span {
    background: #fff;
    border-radius: 20px;
    padding: 4px;
    color: ${({ theme }) => theme.colors.blue};
    font-weight: bold;
    position: absolute;
    top: 0;
    right: 0;
  }
`;
