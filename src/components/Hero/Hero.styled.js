import styled from 'styled-components';
import arrow from '../../images/svg/btn-arrow.svg';
import pawsMobi from '../../images/mobile/paws-mobi.png';
import pawsTab from '../../images/tablet/paws-tab.png';
import pawsDesktop from '../../images/desktop/paws-desktop.png';

import heroBannerMobi from '../../images/mobile/hero-dog-mobi.png';
import heroBannerTab from '../../images/tablet/hero-dog-tab.png';
import heroBannerDesktop from '../../images/desktop/hero-dog-desktop.png';
import { Button } from '../../styles/common.styled';

export const HeroBg = styled.section`
  background: url(${heroBannerMobi}) no-repeat bottom -30px center,
    url(${pawsMobi}) no-repeat bottom 50px center,
    var(--bg-color-light) no-repeat;
  background-size: clamp(200px), contain, cover;
  padding: 90px 17px 380px;

  @media screen and (min-width: 680px) {
    background: url(${heroBannerTab}) no-repeat bottom -15px right 0px,
      url(${pawsTab}) no-repeat bottom 10px center,
      var(--bg-color-light) no-repeat;
    padding: 90px 59px 350px;
  }
  @media screen and (min-width: 1440px) {
    background: url(${heroBannerDesktop}) no-repeat bottom 70px right 160px,
      url(${pawsDesktop}) no-repeat bottom 10px center,
      var(--bg-color-light) no-repeat;
    background-size: 428px 536px auto auto, contain, cover;
    padding: 150px 160px 350px;
  }
`;
export const HeroH1 = styled.h1`
  margin-bottom: 30px;
  color: var(--white);
  font-size: 24px;

  @media screen and (min-width: 680px) {
    max-width: 626px;
    font-size: 40px;
  }
`;

export const HeroText = styled.p`
  margin-bottom: 50px;
  font-size: 18px;

  @media screen and (min-width: 680px) {
    max-width: 626px;
    font-size: 24px;
  }
`;

export const HeroBtn = styled(Button)`
  &::after {
    content: '';
    stroke: aliceblue;

    display: inline-block;
    width: 24px;
    height: 24px;
    background: url(${arrow}) no-repeat center center;
  }
`;

export const HeroBannerContainer = styled.div``;
