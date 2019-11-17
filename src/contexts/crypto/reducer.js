import moment from 'moment';

import * as actions from './actions';

export const initialState = {
  currencies: [],
  loading: false,
  lastChecked: 'Never',
};

export default (state, action) => {
  switch (action.type) {
    case actions.FETCH_CURRENCIES:
      return { ...state, loading: true };

    case actions.FETCH_CURRENCIES_SUCCESS:
      return {
        ...state,
        loading: false,
        currencies: action.currencies,
        lastChecked: moment().format('D MMM YYYY, HH:mm:ss'),
      };

    default:
      return state;
  }
};
