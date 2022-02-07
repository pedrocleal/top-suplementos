import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.red};
  padding: 8px 50px;
`

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 52px;

  a {
    padding: 8px 16px;
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    transition: all 0.1s ease;
    
    &:hover {
      border-bottom: 2px solid ${({theme}) => theme.colors.yellow};
    }
  }
  
`