const readline = require('readline/promises');
const fs = require('fs/promises');
const { EOL } = require('os');
const { stdin: input, stdout: output } = require('process');

class Conrtoller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.counter = 0;
    this.isChoose = false;
    this.rl = readline.createInterface({ input, output });

    this.model.getThemes().then((data = this.view.renderThemes(this.rl, data)));
    this.rl.on('line', async (input) => {
      if (this.isChoose) {
        await this.model.setQuestions(input);
        this.isChoose = true;
      }

      const questions = this.model.getQuestions();

      if (counter === questons.length) {
        this.rl.close();
      }

      this.view.renderQuestion(this.rl, questions[counter]);
      this.changeCounter();
    });
  }

  changeCounter() {
    this.counter++;
  }
}

module.exports = Conrtoller;
