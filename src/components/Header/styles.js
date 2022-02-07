import styled from 'styled-components';

export const Container = styled.header`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 16px 100px;
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

export const Cart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  border: none;
`;
