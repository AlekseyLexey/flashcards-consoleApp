const readline = require('readline/promises');
const fs = require('fs');
const { EOL } = require('os');
const { stdin: input, stdout: output } = require('process');

function getQuiz(path) {
  return fs
    .readFileSync(`./topics/${path}`, 'utf-8')
    .split(`${EOL}${EOL}`)
    .map((el) => {
      const [q, a] = el.split(EOL);

      return { question: q, answer: a };
    });
}

async function start() {
  const rl = readline.createInterface({ input, output });

  const dirs = fs.readdirSync('./topics');

  const dirsPretty = fs
    .readdirSync('./topics')
    .map((el, i) => `${i + 1}. ${el.replace('_flashcard_data.txt', '')}`);

  const answ = await rl.question(`${dirsPretty.join(EOL)}${EOL}`);

  let data = getQuiz(dirs[Number(answ) - 1]);

  let counter = 0;

  for (const { question, answer } of data) {
    const answ = await rl.question(`Вопрос таков: ${question}${EOL}`);

    if (answ === answer) {
      console.log('Хорош');
      counter++;
    } else {
      console.log('Не то');
    }
  }

  console.log('Ты ответиил на все вопросы!', `${counter} / ${data.length - 1}`);

  rl.close();
}

start();
