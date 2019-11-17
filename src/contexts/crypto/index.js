import React, { createContext, useReducer } from 'react';

import { apiRequest } from '../../helpers/api';

import reducer, { initialState } from './reducer';
import * as actions from './actions';

export const CryptoContext = createContext([]);

export const CryptoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchCurrencies = async currency => {
    dispatch({ type: actions.FETCH_CURRENCIES });

    const { data: currencies } = await apiRequest.get(
      `/currencies?currency=${currency}`
    );

    dispatch({ type: actions.FETCH_CURRENCIES_SUCCESS, currencies });
  };

  return (
    <CryptoContext.Provider value={{ ...state, actions: { fetchCurrencies } }}>
      {children}
    </CryptoContext.Provider>
  );
};
