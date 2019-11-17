import React from 'react';
import PropTypes from 'prop-types';

// helpers
import { formatCurrency } from '../../helpers/format';

import { Label, Text, SubText, CurrencySymbol } from './detailsItem.styles';

const DetailsItem = ({ label, text, subText, currencySymbol }) => (
  <>
    <Label>{label}</Label>
    <Text>
      {currencySymbol && <CurrencySymbol>{currencySymbol}</CurrencySymbol>}
      {formatCurrency(text)}
      {subText && <SubText>{subText}</SubText>}
    </Text>
  </>
);

DetailsItem.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  subText: PropTypes.string,
  currencySymbol: PropTypes.string,
};

DetailsItem.defaultProps = {
  subText: null,
  currencySymbol: null,
};

export default DetailsItem;
