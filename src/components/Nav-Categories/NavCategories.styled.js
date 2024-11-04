import styled from 'styled-components';

import dogsBg from '../../images/mobile/dogs-section-bg-mobi.png';
import catsBg from '../../images/mobile/cats-section-bg-mobi.png';
import rodentsBg from '../../images/mobile/rodents-section-bg-mobi.png';

import dogsBgDesk from '../../images/tablet/dogs-section-bg-tab.png';
import catsBgDesk from '../../images/tablet/cats-section-bg-tab.png';
import rodentsBgDesk from '../../images/tablet/rodents-section-bg-tab.png';

import svgDog from '../../images/svg/dog.svg';
import svgCat from '../../images/svg/cat.svg';
import svgRodent from '../../images/svg/rabbit.svg';

import Dog from '../../images/tablet/dog-png-tab.png';
import Cat from '../../images/tablet/cat-png-tab.png';
import Rabbit from '../../images/tablet/rabbit-png-tab.png';

//*=====================================
export const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;

  @media screen and (min-width: 1064px) {
    gap: 65px;
  }
`;
export const DogsContainer = styled.div`
  background: url(${dogsBg}) no-repeat bottom, var(--bg-color-vio);
  border-radius: 10px;
  min-width: 100px;
  min-height: 100px;
  max-height: 400px;
  max-width: 400px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  color: var(--white);
  font-size: var(--semi-big);
  font-weight: var(--bolder);

  @media screen and (min-width: 1024px) {
    background: url(${dogsBgDesk}) no-repeat bottom 50px center,
      var(--bg-color-vio);

    min-height: 346px;
    min-width: 100px;

    display: block;
  }

  @media screen and (min-width: 1440px) {
    max-width: 430px;
  }
`;

//*=====================================
export const CatsContainer = styled(DogsContainer)`
  background: url(${catsBg}) no-repeat bottom, var(--bg-color-gre);

  @media screen and (min-width: 1024px) {
    max-width: 300px;
    background: url(${catsBgDesk}) no-repeat bottom, var(--bg-color-gre);
  }
  @media screen and (min-width: 1440px) {
    max-width: 330px;
  }
`;
export const RodentsContainer = styled(DogsContainer)`
  background: url(${rodentsBg}) no-repeat bottom, var(--bg-color-yel);

  @media screen and (min-width: 1024px) {
    background: url(${rodentsBgDesk}) no-repeat right, var(--bg-color-yel);
    max-width: 200px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 230px;
  }
`;

//*=====================================
export const MixDiv1 = styled(DogsContainer)`
  display: flex;
  background: var(--rgba-vio);
  transition: var(--smooth);

  &::after {
    content: '';
    display: inline-block;
    width: var(--large);
    height: var(--large);
    background: url(${svgDog}) no-repeat center center;
  }
  &:hover {
    cursor: pointer;
    background: var(--rgba-vio-hover);
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    background: url(${Dog}) no-repeat center center, rgba(187, 123, 217, 0.2);

    &::after {
      display: none;
    }
    &:hover {
      cursor: default;
      background: url(${Dog}) no-repeat center center, rgba(187, 123, 217, 0.2);
    }
  }
`;
export const MixDiv2 = styled(MixDiv1)`
  &::after {
    background: url(${svgCat}) no-repeat center center;
  }
  background: var(--rgba-gre);
  &:hover {
    cursor: pointer;
    background: var(--rgba-gre-hover);
  }

  @media screen and (min-width: 1024px) {
    background: url(${Cat}) no-repeat center center, rgba(43, 174, 170, 0.2);
    &:hover {
      cursor: default;
      background: url(${Cat}) no-repeat center center, rgba(43, 174, 170, 0.2);
    }
  }
`;
export const MixDiv3 = styled(MixDiv1)`
  background: var(--rgba-yel);

  &::after {
    background: url(${svgRodent}) no-repeat center center;
  }
  &:hover {
    cursor: pointer;
    background: var(--rgba-yel-hover);
  }

  @media screen and (min-width: 1024px) {
    background: url(${Rabbit}) no-repeat center center, rgba(252, 217, 4, 0.2);
    &:hover {
      cursor: default;
      background: url(${Rabbit}) no-repeat center center, rgba(252, 217, 4, 0.2);
    }
  }
`;

//*=====================================
export const MixInsideDiv1 = styled.div`
  min-height: 86px;
  min-width: 100%;
  padding: 15px;
  border-radius: 10px;
  background: var(--rgba-vio);
  backdrop-filter: blur(2px);

  display: flex;
  align-items: center;
  line-height: normal;

  transition: var(--smooth);

  &:hover {
    cursor: pointer;
    min-height: 150px;
    padding-top: 15px; /* Adjust padding to move text upwards */
    padding-bottom: 150px; /* Adjust bottom padding for space */
  }
`;
export const MixInsideDiv2 = styled(MixInsideDiv1)`
  background: var(--rgba-gre);
`;
export const MixInsideDiv3 = styled(MixInsideDiv1)`
  background: var(--rgba-yel);
`;
