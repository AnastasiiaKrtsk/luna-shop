import styled from 'styled-components';

export const ButtonShop = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  padding: 15px 25px;
  border: none;
  border-radius: 10px;

  transition: color var(--smooth);

  &:hover,
  &:focus {
    color: #21aca7;
  }
`;

export const StyledSection = styled.section`
  padding: 0;
`;