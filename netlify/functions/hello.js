const Airtable = require('airtable-node');
const dotenv = require('dotenv');
dotenv.config();
const airtable = new Airtable({
  apiKey: process.env.API_KEY,
  base: 'app3vh9826YwErbRs',
  table: 'Teams',
  view: 'Grid view',
});
exports.handler = async function (event, context) {
  airtable
    .list({
      maxRecords: 2,
    })
    .then((resp) => {
      console.log(resp);
    });
  return {
    header: {
      'Access-Control-Allow-Origin': '*',
    },
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello' }),
  };
};
