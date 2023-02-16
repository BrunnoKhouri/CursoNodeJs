import { createInterface as createQuestionInterface } from 'readline';

const rl = createQuestionInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Qual a sua linguagem preferida ?', (language) => {
    if(language === 'Python') console.log('Isso nem é linguagem!')
      else console.log(`A minha linguagem preferida é: ${language}`);
    rl.close();
});