import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: absolute;
  width: 100%;
  padding: 17px;

  @media screen and (min-width: 481px) and (max-width: 768px) {
    padding: 17px 25px 17px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 17px 50px 17px;
  }
  @media screen and (min-width: 1024px) and (max-width: 1440px) {
    padding: 17px 120px 17px;
  }
  @media screen and (min-width: 1440px) {
    padding: 17px 120px 17px;
  }
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const NavText = styled.p`
  font-size: 18px;
`;

export const NavSocialContainer = styled.ul`
  display: flex;
  gap: 1rem;
`;

export const BurgerMenu = styled.button`
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
`;
