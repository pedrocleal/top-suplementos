import styled from 'styled-components';

export const Button = styled.button`
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

  &:disabled {
    background: #ddd;
    border: #fff;
    cursor: default;
  }
  `;
