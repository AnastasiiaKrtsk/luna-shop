import React from 'react';
import {
  CategoriesContainer,
  CatsContainer,
  DogsContainer,
  RodentsContainer,
  MixDiv1,
  MixDiv2,
  MixDiv3,
  MixInsideDiv1,
  MixInsideDiv2,
  MixInsideDiv3,
} from './NavCategories.styled';
import { useMediaQuery } from 'react-responsive';

export const NavCategories = () => {
  const isDesk = useMediaQuery({
    query: '(min-width: 1024px) ',
  });
  console.log(isDesk);

  return (
    <>
      <CategoriesContainer>
        <DogsContainer>
          <MixDiv1>
            {!isDesk ? 'Собаки' : <MixInsideDiv1>Собаки</MixInsideDiv1>}
          </MixDiv1>
        </DogsContainer>
        <CatsContainer>
          <MixDiv2>
            {!isDesk ? 'Коти' : <MixInsideDiv2>Коти</MixInsideDiv2>}
          </MixDiv2>
        </CatsContainer>
        <RodentsContainer>
          <MixDiv3>
            {!isDesk ? 'Кролики' : <MixInsideDiv3>Кролики</MixInsideDiv3>}
          </MixDiv3>
        </RodentsContainer>
      </CategoriesContainer>
    </>
  );
};
