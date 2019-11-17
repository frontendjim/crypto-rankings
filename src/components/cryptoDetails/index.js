import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

// components
import Loader from '../loader';
import Masthead from '../masthead';
import DetailsItem from '../detailsItem';
import CryptoNav from '../cryptoNav';

// contexts
import { CurrencyContext } from '../../contexts/currency';

// helpers
import { apiRequest } from '../../helpers/api';

import {
  Container,
  FirstColumn,
  LastColumn,
  SummaryItem,
  Label,
  Rank,
} from './cryptoDetails.styles';

const CryptoDetails = () => {
  const { currency } = useParams();
  const [cryptoDetails, updateCrypto] = useState(null);
  const [loading, toggleLoading] = useState(false);
  const { selectedCurrencyCode, selectedCurrency } = useContext(
    CurrencyContext
  );

  const fetchCurrencyDetails = async () => {
    toggleLoading(true);

    const { data } = await apiRequest.get(
      `/currencies/${currency}?currency=${selectedCurrencyCode}`
    );

    updateCrypto(data);
    toggleLoading(false);
  };

  // watch for changes in selected currency and refresh results
  useEffect(() => {
    fetchCurrencyDetails();
  }, [selectedCurrencyCode]);

  return (
    <>
      <Helmet>
        {cryptoDetails && <title>{`${cryptoDetails.name} | VFCrypto`}</title>}
      </Helmet>

      <Masthead
        custom={() => (
          <>
            {cryptoDetails && (
              <CryptoNav
                name={cryptoDetails.name}
                symbol={cryptoDetails.symbol}
                price={cryptoDetails.price}
                currencySign={selectedCurrency}
                loading={loading}
              />
            )}
          </>
        )}
      />

      {cryptoDetails && (
        <Container>
          <FirstColumn>
            <Label>Rank</Label>
            <Rank>{cryptoDetails.cmc_rank}</Rank>
          </FirstColumn>

          <LastColumn>
            {loading && <Loader dark />}

            {!loading && (
              <>
                <SummaryItem>
                  <DetailsItem
                    label="Market cap"
                    text={cryptoDetails.market_cap}
                    currencySymbol={selectedCurrency}
                  />
                </SummaryItem>
                <SummaryItem>
                  <DetailsItem
                    label="24H volume"
                    text={cryptoDetails.volume_24h}
                    currencySymbol={selectedCurrency}
                  />
                </SummaryItem>
                <SummaryItem>
                  <DetailsItem
                    label="Circulating supply"
                    text={cryptoDetails.circulating_supply}
                    subText={cryptoDetails.symbol}
                  />
                </SummaryItem>
                <SummaryItem>
                  <DetailsItem
                    label="Total supply"
                    text={cryptoDetails.total_supply}
                    subText={cryptoDetails.symbol}
                  />
                </SummaryItem>
              </>
            )}
          </LastColumn>
        </Container>
      )}
    </>
  );
};

CryptoDetails.propTypes = {};

CryptoDetails.defaultProps = {};

export default CryptoDetails;
