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

  align-items: center;
  justify-content: center;

  flex-direction: ${({ isdesk }) => (isdesk ? 'row' : 'column')};
  gap: 20px;
  width: 100%;
`;
//?=====================================
export const DogsContainer = styled.div`
  background: url(${dogsBg}) repeat bottom, var(--bg-color-vio);
  border-radius: 10px;
  min-height: 100px;
  max-height: 400px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 15px;

  color: var(--white);
  font-size: var(--semi-big);
  font-weight: var(--bolder);

  transition: var(--smooth);

  &:hover {
    cursor: pointer;

    transform: scale(1.05);
  }
`;

export const CatsContainer = styled(DogsContainer)`
  background: url(${catsBg}) repeat bottom, var(--bg-color-gre);
`;
export const RodentsContainer = styled(DogsContainer)`
  background: url(${rodentsBg}) repeat bottom, var(--bg-color-yel);
`;
//&=====================================
export const DogsContainerDesk = styled(DogsContainer)`
  background: url(${Dog}) no-repeat center center,
    url(${dogsBgDesk}) no-repeat bottom 50px center, var(--bg-color-vio);
  min-height: 346px;
  min-width: 100px;
  max-width: 430px;

  display: flex;
  align-items: flex-end;
`;

export const CatsContainerDesk = styled(DogsContainerDesk)`
  background: url(${Cat}) no-repeat center center,
    url(${dogsBgDesk}) no-repeat bottom 50px center, var(--bg-color-gre);
`;
export const RodentsContainerDesk = styled(DogsContainerDesk)`
  background: url(${Rabbit}) no-repeat center center,
    url(${dogsBgDesk}) no-repeat bottom 50px center, var(--bg-color-yel);
`;

//*=====================================
export const MixDiv1 = styled(DogsContainer)`
  background: var(--rgba-vio);
  transition: var(--smooth);
  backdrop-filter: blur(1px);
`;
export const MixDiv2 = styled(MixDiv1)`
  background: var(--rgba-gre);
`;
export const MixDiv3 = styled(MixDiv1)`
  background: var(--rgba-yel);
`;

//?=====================================
export const MixDiv1Text = styled.p`
  display: flex;
  align-items: center;
  gap: 20px;
  color: var(--white);
  font-size: var(--semi-big);
  font-weight: var(--bolder);
  &::after {
    content: '';
    display: inline-block;
    width: var(--large);
    height: var(--large);
    background: url(${svgDog}) no-repeat center center;
  }
`;

export const MixDiv2Text = styled(MixDiv1Text)`
  &::after {
    background: url(${svgCat}) no-repeat center center;
  }
`;

export const MixDiv3Text = styled(MixDiv1Text)`
  &::after {
    background: url(${svgRodent}) no-repeat center center;
  }
`;
//&=====================================
export const MixInsideDiv1 = styled.div`
  width: 100%;
  height: 80px;

  padding: 15px;
  border-radius: 10px;
  background: var(--rgba-vio);
  backdrop-filter: blur(2px);

  display: flex;
  align-items: center;
  line-height: normal;

  transition: var(--smooth);

  &:hover {
    /* cursor: pointer; */
    /* max-height: 160px;
    padding-top: 15px;
    padding-bottom: 160px; */
  }
`;
export const MixInsideDiv2 = styled(MixInsideDiv1)`
  background: var(--rgba-gre);
`;
export const MixInsideDiv3 = styled(MixInsideDiv1)`
  background: var(--rgba-yel);
`;
