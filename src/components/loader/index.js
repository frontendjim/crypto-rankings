import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './loader.styles';

const Loader = ({ dark }) => <Container dark={dark} />;

Loader.propTypes = {
  dark: PropTypes.bool,
};

Loader.defaultProps = {
  dark: false,
};

export default Loader;
