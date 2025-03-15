const { EOL } = require('os');
const fs = require('fs');

class View {
  renderThemes(rl, data) {
    const prettiData = data.map((el) => el);

    rl.question(`${prettiData}`);
  }

  renderQuestion(rl, data) {
    // console.log(data);

    const { question } = data;

    rl.question(`${question}`);
  }
}

module.exports = View;
