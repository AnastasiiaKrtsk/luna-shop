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

  @media screen and (max-width: 768px) {
  }

  @media screen and (min-width: 768px) {
    max-width: 526px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1120px;
    padding-left: 160px;
  }
`;
