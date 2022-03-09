import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.red};
  color: #fff;
  margin-top: 150px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-size: 22px;

    a {
      text-decoration: none;
      color: #fff;
      transition: all 0.2s ease-in;

      &:hover {
        color: ${({ theme }) => theme.colors.blue}
      }
    }
  }

  .images {
    margin-top: 32px;

    ul {
      margin-top: 24px; 

      li {
        a {
          text-decoration: none;
          color: #fff;
          transition: all 0.2s ease-in;
          &:hover {
            color: ${({ theme }) => theme.colors.blue}
          }
        }
      }
    }
  }
`;
