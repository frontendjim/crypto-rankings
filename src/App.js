import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import CurrencyTable from './components/currencyTable';
import Page from './components/page';
import CryptoDetails from './components/cryptoDetails';

import { GlobalStyle } from './helpers/style';

const App = () => (
  <Router>
    <GlobalStyle />

    <Switch>
      <Route path="/:currency">
        <Page title="loading" dark>
          <CryptoDetails />
        </Page>
      </Route>

      <Route path="/">
        <Page title="Top Performers">
          <CurrencyTable />
        </Page>
      </Route>
    </Switch>
  </Router>
);

export default App;
