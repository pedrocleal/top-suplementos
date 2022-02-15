import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 8px 16px;
  margin: 24px 0;
  box-shadow: 0px 4px 4px #DFDFDF;
  border-radius: 10px;

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
