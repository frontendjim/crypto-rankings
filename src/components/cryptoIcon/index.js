import React from 'react';
import PropTypes from 'prop-types';

import { Image } from './cryptoIcon.styles';

const CryptoIcon = ({ type, size, ...props }) => {
  if (!type) return null;

  // sorry, had trouble with dynamic imports so this is a dirty hack
  // as I was running out of time
  const imgPath = `https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@9867bdb19da14e63ffbe63805298fa60bf255cdd/128/icon/${type.toLowerCase()}.png`;

  return <Image {...props} width={size} src={imgPath} alt={type} />;
};

CryptoIcon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.number,
};

CryptoIcon.defaultProps = {
  size: 32,
};

export default CryptoIcon;
