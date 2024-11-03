//Backdrop.jsx
import { createPortal } from 'react-dom';
import {
  BackdropContainer,
  LinksContainer,
  NavContainer,
  StyledLinks,
  SunSvg,
  ThemeSwitcher,
  ThemeSwitcherContainer,
  BurgerMenu,
} from './Backrop.styled';

import { IoMenu } from 'react-icons/io5';
import { FaInstagram } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa6';
import { BiLogoGmail } from 'react-icons/bi';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleAction } from '../../redux/slices/backdropSlice';

const backdropRoot = document.querySelector('#backdrop-root');

const Backdrop = () => {
  const dispatch = useDispatch();

  return createPortal(
    <BackdropContainer>
      <NavContainer>
        <Link href="./">
          <BurgerMenu
            onClick={() => {
              dispatch(toggleAction());
            }}
            type="button"
          >
            <IoMenu stroke={'#ffffff'} size={32} />
          </BurgerMenu>
        </Link>
        <StyledLinks
          href="https://www.instagram.com/luna.animalshop/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinksContainer>
            <FaInstagram stroke={'#ffffff'} size={32} />
            Instagram
          </LinksContainer>
        </StyledLinks>
        <StyledLinks href="./">
          <LinksContainer>
            <FaTiktok stroke={'#ffffff'} size={32} />
            TikTok
          </LinksContainer>
        </StyledLinks>
        <StyledLinks href="./">
          <LinksContainer>
            <FaTelegram stroke={'#ffffff'} size={32} />
            Telegram
          </LinksContainer>
        </StyledLinks>
        <StyledLinks href="./">
          <LinksContainer>
            <BiLogoGmail stroke={'#ffffff'} size={32} />
            Gmail
          </LinksContainer>
        </StyledLinks>
        <ThemeSwitcherContainer>
          <ThemeSwitcher>
            <SunSvg />
          </ThemeSwitcher>
        </ThemeSwitcherContainer>
      </NavContainer>
    </BackdropContainer>,
    backdropRoot
  );
};
export default Backdrop;
