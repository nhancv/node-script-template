// Delay with progress
// https://www.npmjs.com/package/cli-progress
const cliProgress = require('cli-progress');
const sleepWithProgress = (ms) => {
  const bar1 = new cliProgress.SingleBar(
    {
      format: 'Sleeping | {bar} {percentage}% | ETA: {eta}s | {value}/{total} | {status}: {duration}s',
      hideCursor: true,
      barsize: 10,
      barCompleteChar: '*',
      barIncompleteChar: '-',
    },
    cliProgress.Presets.shades_classic,
  );
  return new Promise((resolve) => {
    const tick = 10;
    // Start progress with total 100 and start value of 0
    bar1.start(ms, 0, { status: 'Start' });
    // Update progress with interval
    const intervalId = setInterval(() => bar1.increment(tick), tick);

    // Delay with timeout
    const timeOutId = setTimeout(() => {
      resolve(true);
      bar1.update(ms, { status: 'Done' });
      bar1.stop();
      clearInterval(intervalId);
      clearTimeout(timeOutId);
    }, ms);
  });
};

// Delay
const sleep = (ms) => {
  console.log('sleep:', ms);
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// Remove number as key
const normObj = (obj, stringify = false) => {
  for (const [key, value] of Object.entries(obj)) {
    if (!isNaN(Number(key))) delete obj[key];
    else obj[key] = value.toString();
  }
  return stringify ? JSON.stringify(obj) : obj;
};

// Clone array of objects (lv 1)
const copyArrayObjs = (array) => {
  return array.map((v) => {
    return JSON.parse(JSON.stringify(v));
  });
};

// Returns a random float number between min and max (both included)
const randomNumber = (min, max) => {
  return Math.random() * (max - min + 1) + min;
};

// Random boolean
const randomBool = (chance = 0.5) => {
  return Math.random() <= chance;
};

// Sleep before execute callback
const delayWrapper = async (duration, callback) => {
  await sleep(duration);
  return callback;
};

module.exports = {
  sleep,
  sleepWithProgress,
  normObj,
  copyArrayObjs,
  randomNumber,
  randomBool,
  delayWrapper,
};
