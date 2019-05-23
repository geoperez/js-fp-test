const uno = require('uno');
const transformer = require('../src').default;
const jsonData = require('./payload.json');
const jsonResult = require('./result.json');

uno(transformer, transformer.transform, [jsonData], jsonResult);