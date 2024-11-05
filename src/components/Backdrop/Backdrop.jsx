import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

import { iconSize } from '../../utils/imgSettings';
import { iconColor } from '../../utils/imgSettings';

import {
  BackdropContainer,
  LinksContainer,
  NavContainer,
  StyledLinks,
  SunSvg,
  ThemeSwitcher,
  ThemeSwitcherContainer,
} from './Backrop.styled';

import { FaInstagram, FaTiktok, FaTelegram } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
import { useEffect, useRef } from 'react';

const backdropRoot = document.querySelector('#backdrop-root');

const Backdrop = ({ onClose }) => {
  const linkRefs = useRef([]);

  useEffect(() => {
    // Close on Esc key
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose?.(); //? if no onClose provided
      }
    };
    const handleClickOutside = (e) => {
      const isLinkClicked = linkRefs.current.some(
        (link) => link && link.contains(e.target)
      );

      if (!isLinkClicked) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return createPortal(
    <BackdropContainer>
      <NavContainer>
        <Link to="/">
          {/* <CloseIcon
            onClick={() => {
              dispatch(toggleAction());
            }}
            type="button"
          >
            <IoMdArrowRoundForward
              color={iconColor.yellow}
              size={iconSize.meg}
            />
          </CloseIcon> */}
        </Link>
        <StyledLinks
          ref={(el) => (linkRefs.current[0] = el)}
          href="https://www.instagram.com/luna.animalshop/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinksContainer>
            <FaInstagram color={iconColor.white} size={iconSize.lg} />
            Instagram
          </LinksContainer>
        </StyledLinks>
        <StyledLinks
          ref={(el) => (linkRefs.current[1] = el)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinksContainer>
            <FaTiktok color={iconColor.white} size={iconSize.lg} />
            TikTok
          </LinksContainer>
        </StyledLinks>
        <StyledLinks
          ref={(el) => (linkRefs.current[2] = el)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinksContainer>
            <FaTelegram color={iconColor.white} size={iconSize.lg} />
            Telegram
          </LinksContainer>
        </StyledLinks>
        <StyledLinks
          ref={(el) => (linkRefs.current[3] = el)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinksContainer>
            <BiLogoGmail color={iconColor.white} size={iconSize.lg} />
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
