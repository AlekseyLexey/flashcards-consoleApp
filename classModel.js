const fs = require('fs').promises;
const { EOL } = require('os');

class Model {
  constructor() {
    this.questions = [];
  }
  getThemes() {
    return fs.readdir('./topics');
  }

  getQuestions() {
    return this.questions;
  }

  async setQuestionsData(number) {
    const dirs = await this.getThemes();

    if (number < 1 || number > dirs.length) {
      throw new Error('Неверный номер темы');
    }

    const dir = dirs[number - 1];
    const data = await fs.readFile(`./topics/${dir}`, 'utf-8');

    this.questions = data.split(`${EOL}${EOL}`).map((el) => {
      const [question, answer] = el.split(EOL);
      return { question: question.trim(), answer: answer.trim() };
    });

    return this.questions;
    
  }
}

module.exports = Model;
