const { EOL } = require('os');

const colors = {
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  orange: '\x1b[38;5;208m',
  reset: '\x1b[0m',
};

class View {
  renderThemes(rl, data) {
    rl.question(this.toPrettyThemes(data).join(''));
  }

  toPrettyThemes(data) {
    const keyword = '_flashcard_data.txt';

    const prettiData = data.map((el) => {
      if (el.includes(keyword)) {
        return el.replace(keyword, '');
      }
      return el;
    });

    const numberedData = prettiData.map(
      (el, index) =>
        `${colors.yellow}${index + 1}. ${
          colors.yellow
        }${el.toUpperCase()}${EOL}`
    );

    return numberedData;
  }

  renderQuestion(rl, data) {
    const { question } = data;

    rl.question(`${colors.orange}${question}${colors.reset}${EOL}`);
  }

  isRigth(data, input) {
    if (data.trim().toLowerCase() === input.trim().toLowerCase()) {
      console.log(`${EOL}${colors.green}👍 Верно${colors.reset}`);
      return true;
    }
    console.log(`${EOL}${colors.red}👎 Не верно${colors.reset}`);
    return false;
  }
}

module.exports = View;
