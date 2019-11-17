import { CURRENCY_LIST } from '../../constants';

import * as actions from './actions';

const defaultCurrency = 'USD';

export const initialState = {
  selectedCurrency: CURRENCY_LIST[defaultCurrency],
  selectedCurrencyCode: defaultCurrency,
};

export default (state, action) => {
  switch (action.type) {
    case actions.CHANGE_CURRENCY:
      return {
        ...state,
        selectedCurrency: CURRENCY_LIST[action.selected],
        selectedCurrencyCode: action.selected,
      };

    default:
      return state;
  }
};
