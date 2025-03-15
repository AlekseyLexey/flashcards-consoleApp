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

    this.model
      .getThemes()
      .then((data) => this.view.renderThemes(this.rl, data));

    this.rl.on('line', async (input) => {
      if (!this.isChoose) {
        console.log('isChoose!!!!');

        const questions = await this.model.setQuestionsData(Number(input));

        if (this.counter === questions.length) {
          this.rl.close();
        }

        this.view.renderQuestion(this.rl, questions[this.counter]);
        this.changeCounter();
        this.isChoose = true;
      } else {
        console.log('QUESTOINS');
        const questions = this.model.getQuestions();
        console.log(questions);

        if (this.counter === questions.length - 1) {
          this.rl.close();
        } else {
          this.view.renderQuestion(this.rl, questions[this.counter], input);
          this.changeCounter();
        }
      }
    });
  }

  changeCounter() {
    this.counter++;
  }
}

module.exports = Conrtoller;
