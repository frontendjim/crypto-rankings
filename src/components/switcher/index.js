import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { IoIosArrowDown } from 'react-icons/io';

// constants
import { CURRENCY_LIST } from '../../constants';

// contexts
import { CurrencyContext } from '../../contexts/currency';

import { List, Button, Current, Container } from './switcher.styles';

const SwitcherOptions = ({ onButtonClick }) => (
  <List>
    {Object.keys(CURRENCY_LIST).map(currency => (
      <Button key={currency} onClick={() => onButtonClick(currency)}>
        {currency}
      </Button>
    ))}
  </List>
);

const Switcher = () => {
  const [dropdownVisible, toggleDropdown] = useState(false);
  const { selectedCurrencyCode, actions } = useContext(CurrencyContext);

  const onSwitchItemClick = currency => {
    actions.changeCurrency(currency);
    toggleDropdown(false);
  };

  return (
    <Container>
      <Current onClick={() => toggleDropdown(!dropdownVisible)}>
        {selectedCurrencyCode} <IoIosArrowDown />
      </Current>

      {dropdownVisible && <SwitcherOptions onButtonClick={onSwitchItemClick} />}
    </Container>
  );
};

SwitcherOptions.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default Switcher;
