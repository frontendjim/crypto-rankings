import React from 'react';
import PropTypes from 'prop-types';

// components
import Switcher from '../switcher';

import {
  Container,
  Logo,
  LeftContainer,
  SwitchContainer,
} from './masthead.styles';

const Masthead = ({ custom }) => (
  <Container>
    <LeftContainer>
      {custom && custom()}

      {!custom && (
        <Logo to="/">
          <strong>VF</strong>Crypto
        </Logo>
      )}
    </LeftContainer>

    <SwitchContainer>
      <Switcher />
    </SwitchContainer>
  </Container>
);

Masthead.propTypes = {
  custom: PropTypes.func,
};

Masthead.defaultProps = {
  custom: null,
};

export default Masthead;
