const { EOL } = require('os');
class View {
  renderThemes(rl, data) {
    const prettiData = data.map((el) => el);

    rl.question(prettiData);
  }

  renderQuestion(rl, data) {
    const { question } = data;

    rl.question(`${question}${EOL}`);
  }
}
