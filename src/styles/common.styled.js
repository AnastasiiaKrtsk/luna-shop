import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  padding: 15px 25px;
  border: none;
  border-radius: 10px;

  transition: background-color var(--smooth);

  &:hover {
    background-color: #26a7a3;
  }

  @media screen and (min-width: 680px) {
    font-size: 24px;
    padding: 15px 64px;
  }
`;
