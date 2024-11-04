import styled from 'styled-components';

export const Nav = styled.nav`
  position: relative;
`;

export const HeaderMove = styled.div`
  position: absolute;
  top: 24px;
  left: 17px;
  right: 17px;

  @media screen and (min-width: 680px) {
    left: 59px;
    right: 59px;
  }

  @media screen and (min-width: 1440px) {
    left: 160px;
    right: 160px;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavText = styled.p`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
    font-size: 18px;
    margin-right: 350px; /
  }
`;

export const NavSocialContainer = styled.div`
  display: none;

  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 20px;
  }
`;

export const BurgerMenu = styled.button`
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;
