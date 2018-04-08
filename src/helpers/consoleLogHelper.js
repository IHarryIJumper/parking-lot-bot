const colors = require('chalk');
const moment = require('moment');

const error = colors.red;
const warn = colors.yellow;
const step = colors.green;
const start = colors.grey;
const info = colors.blue;

console.logPrototype = console.log;
console.errorPrototype = console.error;
console.warnPrototype = console.warn;

const dateTime = () => {
  return `[${moment().format('DD/MM/YYYY @ HH:mm:ss')}]`;
};

console.log = (...args) => {
  const date = [dateTime()].concat(args);
  if (console) {
    console.logPrototype(...date);
  }
};

console.error = (...args) => {
  const date = [error(dateTime())].concat(args);
  if (console) {
    console.errorPrototype(...date);
  }
};

console.warn = (...args) => {
  const date = [warn(dateTime())].concat(args);
  if (console) {
    console.warnPrototype(...date);
  }
};

console.info = (...args) => {
  const date = [info(dateTime())].concat(args);
  if (console) {
    console.logPrototype(...date);
  }
};

console.min = (...args) => {
  const date = [start(dateTime())].concat(args);
  if (console) {
    console.logPrototype(...date);
  }
};

console.step = (...args) => {
  const date = [step(dateTime())].concat(args);
  if (console) {
    console.logPrototype(...date);
  }
};
