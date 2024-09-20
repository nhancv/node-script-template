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
  normObj,
  copyArrayObjs,
  randomNumber,
  randomBool,
  delayWrapper,
};
