const readline = require('readline/promises');
const fs = require('fs/promises');
const { EOL } = require('os');
const { stdin: input, stdout: output } = require('process');

class Conrtoller {
  constructor() {
    this.rl = readline.createInterface({ input, output });
  }
}

module.exports = Conrtoller;
