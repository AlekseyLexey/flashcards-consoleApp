const { EOL } = require('os');
const fs = require('fs')

class View {
  renderThemes(rl, data) {
    rl.question(toPrettyThemes(data));
  }

  toPrettyThemes(data) {
    const keyword = "_flashcard_data.txt";

const prettiData = data.map((el) => { 

  if(el.includes(keyword)){
    return el.replace(keyword, '');
  }
  return el;
});

  const numberedData = prettiData.map((el, index) => `${index + 1}. ${el.toUpperCase()}${EOL}`)

  return numberedData;

  }

  renderQuestion(rl, data) {
    const { question } = data;

    rl.question(`${question}${EOL}`);
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


