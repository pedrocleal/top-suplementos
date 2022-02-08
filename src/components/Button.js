import styled from "styled-components"

export const Button = styled.button`
  border: 1px solid #01ad00;
  outline: none;
  padding: 8px 12px;
  background: #01B700;
  border-radius: 8px;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  transition: all 0.3s ease;

  &:hover {
    background: #01AD00;
  }

  &:active {
    background: #019A00;
  }
  `