import { Nav, HeaderMove, HeaderContent, BurgerMenu } from './Header.styled';
import logo from 'images/svg/logo-light.svg';
import Section from '../base/Section';
import { IoMenu } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { toggleAction } from '../../redux/slices/backdropSlice';
import Backdrop from 'components/Backdrop/Backdrop';

const Header = () => {
  const isBackdropOpen = useSelector((state) => state.backdrop.isBackdropOpen);
  const dispatch = useDispatch();

  return (
    <Section>
      <HeaderMove>
        <Nav>
          <HeaderContent>
            <Link href="./">
              <img src={logo} alt="logo" />
            </Link>

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
          </HeaderContent>
        </Nav>
      </HeaderMove>

      {isBackdropOpen && <Backdrop />}
    </Section>
  );
};

export default Header;
