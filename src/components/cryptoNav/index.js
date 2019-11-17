import React from 'react';
import PropTypes from 'prop-types';
import { MdArrowBack } from 'react-icons/md';

// components
import CryptoIcon from '../cryptoIcon';

// helpers
import { formatCurrency } from '../../helpers/format';

import { Container, BackLink, Currency, Price } from './cryptoNav.styles';

const CryptoNav = ({ name, symbol, price, currencySign, loading }) => (
  <Container>
    <BackLink to="/">
      <MdArrowBack />
    </BackLink>

    <CryptoIcon size={48} type={symbol} />

    <Currency>
      {name}
      <small>{symbol}</small>
    </Currency>

    {!loading && (
      <Price>
        <span>{currencySign}</span>
        {formatCurrency(price)}
      </Price>
    )}
  </Container>
);

CryptoNav.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  currencySign: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

CryptoNav.defaultProps = {
  loading: false,
};

export default CryptoNav;
