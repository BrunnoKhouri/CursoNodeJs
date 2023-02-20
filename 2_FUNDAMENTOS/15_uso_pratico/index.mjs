import inquirer from "inquirer";
import chalk from "chalk";


inquirer.prompt([{
        name: 'questionName',
        message: 'Qual o seu nome ?'
    },
    {
        name: 'questionAge',
        message: 'Qual sua idade ?'
    }
]).then((answers) => {
    try {
        let age = parseInt(answers.questionAge);
        if (!Number.isInteger(age)) {
            throw new Error('Valor da idade não é valido');
        } else {
            console.log(chalk.bgYellow(chalk.black(`Bem-Vindo ${answers.questionName}`)));
            console.log(chalk.bgYellow(chalk.black(`Sua idade é ${age}`)));
        }

    } catch (err) {
        console.log(err);
    }
});