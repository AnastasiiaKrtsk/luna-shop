//Header.jsx
import {
  Nav,
  HeaderMove,
  HeaderContent,
  BurgerMenu,
  NavText,
  NavSocialContainer,
} from './Header.styled';
import logo from '../../images/svg/logo-light.svg';
import logoDesk from '../../images/svg/logo-light-desk.svg';

import { IoMenu } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { toggleAction } from '../../redux/slices/backdropSlice';
import Backdrop from '../Backdrop/Backdrop';
import Section from '../base/Section';
import { BiLogoGmail } from 'react-icons/bi';
import { LinksContainer, StyledLinks } from '../Backdrop/Backrop.styled';
import { FaInstagram, FaTelegram, FaTiktok } from 'react-icons/fa';

const Header = () => {
  const isBackdropOpen = useSelector((state) => state.backdrop.isBackdropOpen);
  const dispatch = useDispatch();

  const closeBackdrop = () => {
    dispatch(toggleAction());
  };

  return (
    <Section>
      <HeaderMove>
        <Nav>
          <HeaderContent>
            <Link href="./">
              <picture>
                <source srcSet={logoDesk} media="(min-width: 1440px)" />
                <source srcSet={logo} media="(max-width: 1439px)" />
                <img src={logo} alt="logo" />
              </picture>
            </Link>

            <NavText>Магазин товарів для ваших хвостиків</NavText>
            <NavSocialContainer>
              <StyledLinks
                href="https://www.instagram.com/luna.animalshop/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinksContainer>
                  <FaInstagram stroke={'#ffffff'} size={32} />
                </LinksContainer>
              </StyledLinks>
              <StyledLinks href="./">
                <LinksContainer>
                  <FaTiktok stroke={'#ffffff'} size={32} />
                </LinksContainer>
              </StyledLinks>
              <StyledLinks href="./">
                <LinksContainer>
                  <FaTelegram stroke={'#ffffff'} size={32} />
                </LinksContainer>
              </StyledLinks>
              <StyledLinks href="./">
                <LinksContainer>
                  <BiLogoGmail stroke={'#ffffff'} size={32} />
                </LinksContainer>
              </StyledLinks>
            </NavSocialContainer>

            <Link href="./">
              <BurgerMenu onClick={closeBackdrop} type="button">
                <IoMenu stroke={'#ffffff'} size={32} />
              </BurgerMenu>
            </Link>
          </HeaderContent>
        </Nav>
      </HeaderMove>

      {isBackdropOpen && <Backdrop onClose={closeBackdrop} />}
    </Section>
  );
};

export default Header;
