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

  isRigth(data, input) {
    if (data.trim().toLowerCase() === input) {
      console.log(`${EOL}ВЕРНО`);
      return true;
    }
    console.log(`${EOL}НЕ ВЕРНО`);
    return false;
  }
}

module.exports = View;
