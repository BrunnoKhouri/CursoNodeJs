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
                deposit();

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
                `{"name": "${accountName}", "balance": 0}`,
                (err) => {
                    console.log(err);
                });
            console.log(chalk.green(`Conta ${accountName}, criada com sucesso!`));
            operation();
        })
        .catch((err) => console.log(err));
}

// function add an amount to user

function deposit() {
    inquirer.prompt([{
            name: 'accountName',
            message: 'Qual o nome da sua conta?'
        }])
        .then((answer) => {
            const accountName = answer['accountName'];

            if (checkAccount(accountName)) {
                return howMuchDeposit(accountName);
            } else {
                return wantToCreateCount();
            }

        }).catch((err) => console.log(err));
}

function checkAccount(accountName) {
    if (!fs.existsSync(`accounts/${accountName}.json`)) {
        console.log('Essa conta não existe!');
        return false
    } else
        return true;

}

function wantToCreateCount() {
    inquirer.prompt([{
            type: 'list',
            name: 'action',
            message: 'Deseja criar uma conta ?',
            choices: [
                'sim',
                'não'
            ]
        }])
        .then((resp) => {
            const action = resp['action'];
            if (action == 'sim') {
                return createAccount();
            } else if (action == 'não') {
                deposit();
            }
        }).catch(err => console.log(err))
}

function howMuchDeposit(accountName) {
    inquirer.prompt([{
        name: 'amount',
        message: 'Quanto você deseja depositar'
    }]).then((answer) => {
        const amount = answer['amount'];
        addAmount(accountName, amount);
    }).catch(err => console.log(err))
}

function addAmount(accountName, amount) {
    const accountData = getAccount(accountName);
    if (!amount) {
        console.log('Ocorreu um erro, tente novamente mais tarde!');
        return operation();
    }
    accountData.balance = parseFloat(amount) + parseFloat((accountData.balance));
    console.log(accountData);
    
    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function (err) {
            console.log(err);
        });

    operation();
}

function getAccount(accountName) {
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf-8',
        flag: 'r'
    });

    return JSON.parse(accountJSON);
}