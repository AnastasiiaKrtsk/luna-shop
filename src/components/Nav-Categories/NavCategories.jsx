import React from 'react';
import {
  CategoriesContainer,
  CatsContainer,
  DogsContainer,
  DogsContainerDesk,
  CatsContainerDesk,
  RodentsContainerDesk,
  RodentsContainer,
  MixDiv1,
  MixDiv2,
  MixDiv3,
  MixInsideDiv1,
  MixInsideDiv2,
  MixInsideDiv3,
  MixDiv1Text,
  MixDiv2Text,
  MixDiv3Text,
} from './NavCategories.styled';
import { useMediaQuery } from 'react-responsive';

export const NavCategories = () => {
  const isDesk = useMediaQuery({
    query: '(min-width: 1024px) ',
  });

  return (
    <CategoriesContainer isdesk={isDesk}>
      {!isDesk ? (
        <>
          <DogsContainer>
            <MixDiv1>
              <MixDiv1Text>Собаки</MixDiv1Text>
            </MixDiv1>
          </DogsContainer>
          <CatsContainer>
            <MixDiv2>
              <MixDiv2Text>Коти</MixDiv2Text>
            </MixDiv2>
          </CatsContainer>
          <RodentsContainer>
            <MixDiv3>
              <MixDiv3Text>Кролики</MixDiv3Text>
            </MixDiv3>
          </RodentsContainer>
        </>
      ) : (
        <>
          <DogsContainerDesk>
            <MixInsideDiv1>Собаки</MixInsideDiv1>
          </DogsContainerDesk>
          <CatsContainerDesk>
            <MixInsideDiv2>Коти</MixInsideDiv2>
          </CatsContainerDesk>
          <RodentsContainerDesk>
            <MixInsideDiv3>Кролики</MixInsideDiv3>
          </RodentsContainerDesk>
        </>
      )}

      {/* <CatsContainer>
        <MixDiv2>
          {!isDesk ? 'Коти' : <MixInsideDiv2>Коти</MixInsideDiv2>}
        </MixDiv2>
      </CatsContainer>
      <RodentsContainer>
        <MixDiv3>
          {!isDesk ? 'Кролики' : <MixInsideDiv3>Кролики</MixInsideDiv3>}
        </MixDiv3>
      </RodentsContainer> */}
    </CategoriesContainer>
  );
};
