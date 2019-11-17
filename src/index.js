import React from 'react';
import ReactDOM from 'react-dom';
import { IconContext } from 'react-icons';

// components
import App from './App';

// contexts
import { CryptoProvider } from './contexts/crypto';
import { CurrencyProvider } from './contexts/currency';

ReactDOM.render(
  <IconContext.Provider value={{ className: 'react-icon' }}>
    <CurrencyProvider>
      <CryptoProvider>
        <App />
      </CryptoProvider>
    </CurrencyProvider>
  </IconContext.Provider>,
  document.getElementById('root')
);
