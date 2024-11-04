import React from 'react';
import { Div, DivBg } from './MainLanding.styled';
import { NavCategories } from '../Nav-Categories/NavCategories';

export const MainLanding = () => {
  return (
    <DivBg>
      <NavCategories />
    </DivBg>
  );
};
