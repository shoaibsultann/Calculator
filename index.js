#!/usr/bin/env node
import inquirer from 'inquirer';
inquirer
    .prompt([
    {
        message: "First Number",
        name: "first_num",
        type: "number"
    },
    {
        message: "Second Number",
        name: "second_num",
        type: "number"
    },
    {
        message: "Select Operation",
        name: "Operator",
        type: "list",
        choices: ['add +', 'subtract -', 'multiply x', 'divide /', 'modulus %']
    }
])
    .then((result) => {
    // console.log(result);
    // console.log(result.first_num);
    // console.log(result.second_num);
    // console.log("Sum is:", result.first_num + result.second_num);
    if (result.Operator == 'multiply x') {
        console.log('Your multiplication is:', result.first_num * result.second_num);
    }
    else if (result.Operator == 'subtract -') {
        console.log('Your subtraction is:', result.first_num - result.second_num);
    }
    else if (result.Operator == 'add +') {
        console.log('Your addition is:', result.first_num + result.second_num);
    }
    else if (result.Operator == 'divide /') {
        console.log('Your division is:', result.first_num / result.second_num);
    }
    else {
        console.log('Your modulus is:', result.first_num % result.second_num);
    }
})
    .catch((error) => {
    if (error.isTtyError) {
        console.log("in error", error);
        //prompt couldn't be rendered in the current environment
    }
    else {
        console.log("Error is on it's way");
    }
});
