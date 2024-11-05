import styled from 'styled-components';
import arrow from '../../images/svg/btn-arrow.svg';
import pawsMobi from '../../images/mobile/paws-mobi.png';
import pawsTab from '../../images/tablet/paws-tab.png';
import pawsDesk from '../../images/desktop/paws-desktop.png';

import heroBannerMobi from '../../images/mobile/hero-dog-mobi.png';
import heroBannerTab from '../../images/tablet/hero-dog-tab.png';
import heroBannerDesktop from '../../images/desktop/hero-dog-desktop.png';
import heroBanner2Desktop from '../../images/desktop/hero-dog2-desktop.png';

import { Button, Section } from '../../styles/common.styled';

export const HeroSection = styled(Section)`
  background: url(${heroBannerMobi}) no-repeat bottom -30px right 30px,
    url(${pawsMobi}) no-repeat bottom 80px center,
    var(--bg-color-light) no-repeat;
  background-size: auto, contain, cover;
  padding-top: 100px;
  padding-bottom: 370px;

  @media screen and (min-width: 481px) and (max-width: 768px) {
    background: url(${heroBannerMobi}) no-repeat bottom 0px right 30px,
      url(${pawsTab}) no-repeat bottom center, var(--bg-color-light) no-repeat;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    background: url(${heroBannerTab}) no-repeat bottom 80px right 50px,
      url(${pawsTab}) no-repeat bottom center, var(--bg-color-light) no-repeat;
  }

  @media screen and (min-width: 1024px) and (max-width: 1440px) {
    background: url(${heroBannerDesktop}) no-repeat bottom 80px right 150px,
      url(${pawsDesk}) no-repeat bottom center, var(--bg-color-light) no-repeat;
    padding-top: 150px;
  }
  @media screen and (min-width: 1440px) {
    background: url(${heroBanner2Desktop}) no-repeat bottom 80px center,
      url(${pawsDesk}) no-repeat bottom center, var(--bg-color-light) no-repeat;
    padding-top: 150px;
  }
`;

//*=========================
export const HeroContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

export const HeroTextContainer = styled.div`
  max-width: 100%;

  display: flex;
  flex-direction: column;
  gap: 30px;

  margin-bottom: 30px;
  @media screen and (min-width: 481px) and (max-width: 768px) {
    max-width: 80%;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    max-width: 60%;
  }
  @media screen and (min-width: 1024px) and (max-width: 1440px) {
    max-width: 50%;
  }
  @media screen and (min-width: 1440px) {
    max-width: 50%;
  }
`;
export const HeroH1 = styled.h1`
  @media screen and (min-width: 1024px) and (max-width: 1440px) {
    font-size: var(--big);
  }
  @media screen and (min-width: 1440px) {
    font-size: var(--big);
  }
`;

export const HeroText = styled.p`
  font-size: var(--semi-medium);

  @media screen and (min-width: 1024px) and (max-width: 1440px) {
    font-size: var(--medium);
  }
  @media screen and (min-width: 1440px) {
    font-size: var(--medium);
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
