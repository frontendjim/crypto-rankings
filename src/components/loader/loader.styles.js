import styled from 'styled-components';

import spinnerDark from './spinner-dark.svg';
import spinnerLight from './spinner-light.svg';

export const Container = styled.div`
  background: transparent
    url(${props => (props.dark ? spinnerLight : spinnerDark)}) center center
    no-repeat;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;
