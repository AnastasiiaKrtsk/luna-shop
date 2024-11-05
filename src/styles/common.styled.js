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

export const Section = styled.section`
  padding: 80px 17px;
  @media screen and (min-width: 481px) and (max-width: 768px) {
    padding: 80px 25px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 80px 50px;
  }
  @media screen and (min-width: 1024px) and (max-width: 1440px) {
    padding: 100px 120px;
  }
  @media screen and (min-width: 1440px) {
    padding-left: calc((100vw - 1120px) / 5);
    padding-right: calc((100vw - 1120px) / 5);
  }
`;
