import React, { createContext, useReducer } from 'react';

import reducer, { initialState } from './reducer';
import * as actions from './actions';

export const CurrencyContext = createContext(null);

export const CurrencyProvider = ({ children }) => {
  const [{ selectedCurrency, selectedCurrencyCode }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const actionsMethods = {
    changeCurrency: currencyCode =>
      dispatch({ type: actions.CHANGE_CURRENCY, selected: currencyCode }),
  };

  return (
    <CurrencyContext.Provider
      value={{
        selectedCurrency,
        selectedCurrencyCode,
        actions: actionsMethods,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
