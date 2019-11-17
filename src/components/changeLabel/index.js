import React from 'react';
import { IoIosArrowRoundUp, IoIosArrowRoundDown } from 'react-icons/io';
import PropTypes from 'prop-types';

import { Container } from './changeLabel.styles';

const ChangeLabel = ({ change }) => {
  const parsed = parseFloat(change).toFixed(2);

  const renderArrow = () =>
    parsed > 0 ? <IoIosArrowRoundUp /> : <IoIosArrowRoundDown />;

  return (
    <Container positive={parsed > 0}>
      {parsed}% {renderArrow()}
    </Container>
  );
};

ChangeLabel.propTypes = {
  change: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChangeLabel.defaultProps = {
  change: 0,
};

export default ChangeLabel;
