// Modulos externos
import inquirer from "inquirer";
import chalk from "chalk";

//Modulos internos
import fs from 'fs';

operation();

function operation() {

    inquirer.prompt([{
            type: 'list',
            name: 'action',
            message: 'O que você deseja fazer?',
            choices: [
                'Criar Conta',
                'Consultar Saldo',
                'Depositar',
                'Sacar',
                'Sair'
            ]
        }])
        .then((answer) => {
            const action = answer['action'];
            console.log(action);
            if (action === 'Criar Conta') {
                createAccount();
            } else if (action === 'Consultar Saldo') {

            } else if (action === 'Depositar') {

            } else if (action === 'Sacar') {

            } else if (action === 'Sair') {
                console.log(chalk.bgWhite.black('Adios amigo'));
                process.exit();
            }
        })
        .catch((err) => console.log(err));
}

// create an account
function createAccount() {
    console.log(chalk.bgGreen.black('Lá vamos nós novamente'));
    console.log(chalk.green('Defina as opções da sua conta a seguir'));
    buildAccount();
}

function buildAccount() {
    inquirer.prompt([{
            name: 'accountName',
            message: 'Digite um nome para sua conta:',
        }])
        .then((answer) => {
            console.info(answer['accountName']);
            const accountName = answer['accountName'];
            if (!fs.existsSync('accounts')) {
                fs.mkdirSync('accounts');
            }
            if (fs.existsSync(`accounts/${accountName}.json`)) {
                console.log(
                    chalk.bgRed.black('Está conta já existe, escolha outro nome!')
                );
                buildAccount();
                return
            }

            fs.writeFileSync(`accounts/${accountName}.json`,
                `{"name": "${accountName}", "valeu": "0"}`,
                (err) => {
                    console.log(err);
                });
            console.log(chalk.green(`Conta ${accountName}, criada com sucesso!`));
            operation();
        })
        .catch((err) => console.log(err));
}