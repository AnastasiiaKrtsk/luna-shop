//Header.jsx
import {
  Nav,
  HeaderContainer,
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
import { BiLogoGmail } from 'react-icons/bi';
import { LinksContainer, StyledLinks } from '../Backdrop/Backrop.styled';
import { FaInstagram, FaTelegram, FaTiktok } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import { iconSize } from '../../utils/imgSettings';

const Header = () => {
  const isBackdropOpen = useSelector((state) => state.backdrop.isBackdropOpen);
  const dispatch = useDispatch();

  const closeBackdrop = () => {
    dispatch(toggleAction());
  };

  const isDesk = useMediaQuery({
    query: '(min-width: 1024px) ',
  });

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <Nav>
            <Link href="./">
              <picture>
                <source srcSet={logoDesk} media="(min-width: 769px)" />
                <source srcSet={logo} media="(max-width: 1023)" />
                <img src={logo} alt="logo" />
              </picture>
            </Link>
            {isDesk ? (
              <>
                <NavText>Магазин товарів для ваших хвостиків</NavText>

                <NavSocialContainer>
                  <LinksContainer>
                    <StyledLinks
                      href="https://www.instagram.com/luna.animalshop/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram stroke={'#ffffff'} size={iconSize.lg} />
                    </StyledLinks>
                  </LinksContainer>

                  <LinksContainer>
                    <StyledLinks href="./">
                      <FaTiktok stroke={'#ffffff'} size={iconSize.lg} />
                    </StyledLinks>
                  </LinksContainer>

                  <LinksContainer>
                    <StyledLinks href="./">
                      <FaTelegram stroke={'#ffffff'} size={iconSize.lg} />
                    </StyledLinks>
                  </LinksContainer>

                  <LinksContainer>
                    <StyledLinks href="./">
                      <BiLogoGmail stroke={'#ffffff'} size={iconSize.lg} />
                    </StyledLinks>
                  </LinksContainer>
                </NavSocialContainer>
              </>
            ) : (
              <Link href="./">
                <BurgerMenu onClick={closeBackdrop} type="button">
                  <IoMenu stroke={'#ffffff'} size={iconSize.lg} />
                </BurgerMenu>
              </Link>
            )}
          </Nav>
        </HeaderContent>
      </HeaderContainer>

      {isBackdropOpen && <Backdrop onClose={closeBackdrop} />}
    </>
  );
};

export default Header;
