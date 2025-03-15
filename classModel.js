const fs = require('fs').promises;
const { EOL } = require('os');

export class Model {
  getThemes() {
    return fs
      .readdir('./topics')
      .then((dirs) => dirs)
      .catch((err) => {
        console.error('Ошибка:', err);
      });
  }
  setQuestionsData(number) {
    return this.getThemes()
      .then((dirs) => {
        if (number < 1 || number > dirs.length) {
          throw new Error('Неверный номер темы');
        }

        const dir = dirs[number - 1];

        return fs.readFile(`./topics/${dir}`, 'utf-8');
      })
      .then((data) => {
        return data.split(`${EOL}${EOL}`).map((el) => {
          const [question, answer] = el.split(EOL);
          return { question: question.trim(), answer: answer.trim() };
        });
      })
      .catch((err) => {
        console.error('Ошибка:', err);
        throw err;
      });
  }
}
