const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

class Conrtoller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.counter = 0;
    this.isChoose = false;
    this.count = 0;
    this.rl = readline.createInterface({ input, output });

    this.model
      .getThemes()
      .then((data) => this.view.renderThemes(this.rl, data));

    this.rl.on('line', async (input) => {
      if (!this.isChoose) {
        const questions = await this.model.setQuestionsData(Number(input));

        if (this.counter === questions.length) {
          this.rl.close();
        }

        this.view.renderQuestion(this.rl, questions[this.counter]);
        this.changeCounter();
        this.isChoose = true;
      } else {
        const questions = this.model.getQuestions();

        if (this.counter === questions.length) {
          this.count += this.view.isRigth(
            questions[this.counter - 1].answer,
            input
          );
          console.log(`ВЕРНО: ${this.count} ИЗ: ${questions.length}`);
          this.rl.close();
        } else {
          this.count += this.view.isRigth(
            questions[this.counter - 1].answer,
            input
          );
          this.view.renderQuestion(this.rl, questions[this.counter]);
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
