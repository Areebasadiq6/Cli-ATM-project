#!usr/bin/env
import inquirer from "inquirer";
let MyBalnace = 10000;
let MyPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    },
]);
if (pinAnswer.pin === MyPin) {
    console.log("correct pin code !!!");
    console.log("current account balance is : " + MyBalnace);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"],
        },
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            },
        ]);
        // home work
        if (amountAns.amount > MyBalnace) {
            console.log("Insufficient Balance");
        }
        else {
            MyBalnace -= amountAns.amount;
            console.log("Withdraw successfully " + amountAns.amount);
            console.log("Your remaining balance is : " + MyBalnace);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log("your balance is :" + MyBalnace);
    }
}
else {
    console.log("In correct pin number");
}
