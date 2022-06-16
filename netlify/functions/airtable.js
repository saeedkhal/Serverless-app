const Airtable = require('airtable-node');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const airtable = new Airtable({
  apiKey: process.env.API_KEY,
  base: 'app3vh9826YwErbRs',
  table: 'Teams',
  view: 'Grid view',
});
exports.handler = async function (event, context) {
  let resp;
  try {
    resp = await airtable.list({
      maxRecords: 100,
    });
  } catch (err) {
    console.log(err);
  }
  console.log(resp.records[0].fields.image);
  const data = resp.records.map((record) => {
    const { id } = record;
    const { name, image, price, desc } = record.fields;
    const { url } = image[0];
    return { id, name, image, price, url, desc };
  });
  return {
    header: {
      'Access-Control-Allow-Origin': '*',
    },
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
