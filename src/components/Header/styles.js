import styled from 'styled-components';

export const Container = styled.header`
  margin: 0 auto;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 16px;
  background: ${({ theme }) => theme.colors.blue};

  img {
    width: 50px;
  }

  @media (max-width: 580px) {
    img {
      width: 40px;
    }
    padding: 16px 24px;
    justify-content: space-between;
    height: 60px;
  }
`;

export const SearchContainer = styled.div`
  display: flex; 
  align-items: center;
  width: 400px;
  background #fff;
  border-radius: 4px;

  img {
    margin-top: 4px;
    height: 30px;
    width: 30px;
    background: #fff;
  }

  @media (max-width: 580px) {
    width: 200px;
  }
`;

export const SearchInput = styled.input`
  font-family: 'Sora', sans-serif;
  padding: 10px;
  width: 100%;
  max-width: 450px;
  border: none;
  outline: none;
  border-radius: 4px;

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

    @media (max-width: 580px) {
      padding: 2px;
    }
    
  }
`;
