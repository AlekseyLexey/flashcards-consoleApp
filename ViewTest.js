const { EOL } = require('os');
const fs = require('fs');

class View {
  renderThemes(rl, data) {
    const prettiData = data.map((el) => el);

    rl.question(`${prettiData}`);
  }

  renderQuestion(rl, data, input) {
    // console.log(data);

    const { question, answer } = data;

    if (answer === input) {
      console.log('врено');
    } else {
      console.log('НЕ ВЕРНО');
    }

    rl.question(`${question}`);
  }
}

module.exports = View;
