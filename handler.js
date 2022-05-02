'use strict';
const fetch = require('node-fetch')

module.exports.hello = async (event) => {

  const result = await fetch('https://api.coinbase.com/v2/prices/BTC-USD/buy')
      .then(res => res.json())


  console.log(result)
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        result,
      },
      null,
      2
    ),
  };
};
