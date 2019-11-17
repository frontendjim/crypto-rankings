import React, { useContext, useEffect } from 'react';

// contexts
import { CryptoContext } from '../../contexts/crypto';
import { CurrencyContext } from '../../contexts/currency';

// components
import ChangeLabel from '../changeLabel';
import Loader from '../loader';
import Masthead from '../masthead';

// helpers
import { formatCurrency } from '../../helpers/format';

// constants
import { REFRESH_INTERVAL } from '../../constants';

import {
  Wrapper,
  Row,
  Col,
  ColNum,
  ColChange,
  Inner,
  Currency,
  Head,
  NoResults,
  IconImg,
  LastUpdated,
} from './currencyTable.styles';

const CurrencyRow = ({
  slug,
  rank,
  name,
  symbol,
  currencySign,
  price = null,
  marketCap,
  change,
}) => (
  <Row to={`/${slug}`}>
    <Inner>
      <ColNum>{rank}</ColNum>
      <Col>
        <IconImg type={symbol} />
        <span>{name}</span>
      </Col>
      <Col>
        <Currency>{currencySign}</Currency>
        {formatCurrency(price)}
      </Col>
      <Col>
        <Currency>{currencySign}</Currency>
        {formatCurrency(marketCap)}
      </Col>
      <ColChange>
        <ChangeLabel change={change} />
      </ColChange>
    </Inner>
  </Row>
);

const CurrencyHead = () => (
  <Head>
    <Inner>
      <ColNum />
      <Col>Cryptocurrency</Col>
      <Col>Price</Col>
      <Col>Market cap</Col>
      <ColChange>24h Change</ColChange>
    </Inner>
  </Head>
);

const CurrencyTable = () => {
  const { currencies = [], loading, lastChecked, actions } = useContext(
    CryptoContext
  );
  const { selectedCurrency, selectedCurrencyCode } = useContext(
    CurrencyContext
  );

  // set up refresh
  useEffect(() => {
    const intervalId = setInterval(() => {
      actions.fetchCurrencies(selectedCurrencyCode);
    }, REFRESH_INTERVAL);

    return () => clearInterval(intervalId);
  });

  // refresh if selected currency changes
  useEffect(() => {
    actions.fetchCurrencies(selectedCurrencyCode);
  }, [selectedCurrencyCode]);

  return (
    <>
      <Masthead />

      <Wrapper>
        {loading && <Loader />}

        <CurrencyHead />

        {!loading && currencies.length < 1 && (
          <NoResults>No results to show</NoResults>
        )}

        {!loading &&
          currencies.length > 0 &&
          currencies.map(currency => (
            <CurrencyRow
              key={currency.slug}
              slug={currency.slug}
              rank={currency.cmc_rank}
              name={currency.name}
              symbol={currency.symbol}
              currencySign={selectedCurrency}
              price={currency.price}
              marketCap={currency.market_cap}
              change={currency.percent_change_24h}
            />
          ))}
      </Wrapper>

      <LastUpdated>Last updated: {lastChecked}</LastUpdated>
    </>
  );
};

export default CurrencyTable;
