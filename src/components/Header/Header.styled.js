import styled from 'styled-components';

export const Nav = styled.nav`
  position: relative;
`;
export const HeaderMove = styled.div`
  position: absolute;
  top: 14px;

  /* ОЦЕ ОДЛІПЛЯЄ МЕНЮ І ЛОГО */
  left: 18px;
  right: 18px;
`;
export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; /* Vertically center content */
`;
export const BurgerMenu = styled.button`
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
`;
