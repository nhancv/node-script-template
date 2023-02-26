require('dotenv').config();

const { sleepWithProgress } = require('./libs/utils');

const processScript = async () => {
  await sleepWithProgress(1000);
};

processScript()
  .then(() => {
    console.log('DONE');
  })
  .catch((error) => console.error(error));
