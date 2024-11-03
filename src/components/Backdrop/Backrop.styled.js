import styled from 'styled-components';
import { FiSun } from 'react-icons/fi';
import { iconColor } from '../../utils/imgSettings';

export const BackdropContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(133, 99, 191, 0.5);
  backdrop-filter: blur(4px);

  @media screen and (min-width: 680px) {
    max-width: 358px;
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 90px;
  gap: 40px;
`;
export const StyledLinks = styled.a`
  font-size: 24px;
  font-weight: bold;
  transition: color var(--smooth), transform var(--smooth);

  &:hover {
    transform: scale(1.1);
    color: ${iconColor.yellow};
  }
`;

export const ThemeSwitcherContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 3px;

  width: 70px;
  height: 36px;
  background-color: #663599;
  border-radius: 50px;
`;

export const ThemeSwitcher = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;

  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50px;
`;

export const SunSvg = styled(FiSun)`
  width: 20px;
  height: 20px;
  color: #ffdb00;
`;

export const LinksContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;

export const CloseIcon = styled.div`
  position: fixed;

  @media screen and (min-width: 680px) {
    display: none;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;
