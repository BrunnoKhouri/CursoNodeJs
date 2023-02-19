import inquirer from "inquirer";

inquirer.prompt([{
            name: 'p1',
            message: 'Qual a primeira nota ?',
        },
        {
            name: 'p2',
            message: 'Qual a segunda nota?',
        }
    ]).then((answers) => {
        console.log('primeira nota', answers.p1);
        console.log('sugunda nota', answers.p2);
        const media = ((parseInt(answers.p1) + parseInt(answers.p2)) / 2);
        console.log(`A sua média é: ${media}`);
    })
    .catch(err => console.log(err));