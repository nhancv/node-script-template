require('dotenv').config();

const { sleep } = require('./libs/utils');

const processScript = async () => {
  await sleep(1000);
};

processScript()
  .catch((error) => console.error(error))
  .finally(() => console.log('Exiting...'));
