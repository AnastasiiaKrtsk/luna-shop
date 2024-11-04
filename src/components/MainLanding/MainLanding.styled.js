import styled from 'styled-components';

import bonesMobi from '../../images/mobile/bones-background-mobi.png';
import bonesDesk from '../../images/desktop/bones-background-desk.png';

export const DivBg = styled.section`
  background: url(${bonesDesk}) repeat top;
  padding: 80px 17px;
  display: flex;
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */

  @media screen and (min-width: 1024px) {
    background: url(${bonesDesk}) repeat top;
  }
`;
