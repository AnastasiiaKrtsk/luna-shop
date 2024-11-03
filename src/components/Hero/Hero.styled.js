import Section from 'components/base/Section';
import styled from 'styled-components';
import arrow from '../../images/svg/btn-arrow.svg';

export const HeroContent = styled.div`
  background: url(../../images/mobile/paws-mobi.png) no-repeat bottom 50px
      center,
    var(--bg-color-light) no-repeat;
  background-size: auto, cover;
  padding: 90px 17px 0;
`;
export const HeroH1 = styled.h1`
  margin-bottom: 30px;
  color: var(--white);
  font-size: 24px;
`;

export const HeroText = styled.p`
  margin-bottom: 50px;
  font-size: 18px;
`;

export const HeroBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  padding: 15px 25px;
  border: none;
  border-radius: 10px;

  transition: background-color var(--smooth);

  &::after {
    content: '';
    stroke: aliceblue;

    display: inline-block;
    width: 24px;
    height: 24px;
    background: url(${arrow}) no-repeat center center;
  }

  &:hover {
    background-color: #27a8a4;
  }
`;

export const HeroBannerContainer = styled.div`
  margin: auto;
`;
