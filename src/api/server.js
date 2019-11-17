const express = require('express');
const axios = require('axios');
const cors = require('cors');

const port = 5000;
const app = express();
app.use(cors());

const apiRequest = axios.create({
  baseURL: 'https://pro-api.coinmarketcap.com/v1',
  headers: {
    'X-CMC_PRO_API_KEY': '7644fb57-1219-48a9-bb94-a757f37ca386',
  },
});

const parseCurrencyData = (currency, code) => {
  const { quote, ...rest } = currency;

  return { ...rest, ...quote[code] };
};

app.get('/currencies', async (req, res) => {
  const { currency } = req.query;

  try {
    const {
      data: { data },
    } = await apiRequest.get(
      `cryptocurrency/listings/latest?limit=10&convert=${currency}`
    );

    const parsed = data.map(item => parseCurrencyData(item, currency));

    return res.json(parsed);
  } catch (error) {
    console.error(error);
  }
});

app.get('/currencies/:crypto', async (req, res) => {
  const { currency } = req.query;
  const { crypto } = req.params;

  try {
    const {
      data: { data },
    } = await apiRequest.get(
      `cryptocurrency/quotes/latest?slug=${crypto}&convert=${currency}`
    );

    const parsed = parseCurrencyData(data[Object.keys(data)[0]], currency);

    return res.json(parsed);
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => console.log(`API listening on port ${port}!`));
