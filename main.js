#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
const questions = [
    {
        question: 'What is the output of the following TypeScript code?\n\n```typescript\nlet a: number = 10;\nlet b: string = "TypeScript";\nconsole.log(typeof a);\nconsole.log(typeof b);\n```',
        choices: ['number', 'string', 'object', 'boolean'],
        answer: 'number',
    },
    {
        question: 'What will be the type of `person` in the following code?\n\n```typescript\ninterface Person {\n  name: string;\n  age: number;\n}\nconst person: Person = { name: "Alice", age: 30 };\n```',
        choices: ['Person', '{ name: string; age: number; }', 'string', 'number'],
        answer: 'Person',
    },
    {
        question: 'What is the correct way to declare a function that takes a string and returns its length?\n\n```typescript\nfunction getLength(value: ______): ______ {\n  return value.length;\n}\n```',
        choices: ['string, number', 'string, string', 'any, number', 'number, number'],
        answer: 'string, number',
    },
    {
        question: 'What does the following TypeScript code do?\n\n```typescript\nconst obj = { name: "TypeScript" };\nconst { name } = obj;\nconsole.log(name);\n```',
        choices: ['Destructures `name` from `obj`', 'Logs the entire `obj`', 'Logs `undefined`', 'Throws an error'],
        answer: 'Destructures `name` from `obj`',
    },
    {
        question: 'What will be the value of `color` in the following code?\n\n```typescript\nenum Color {\n  Red = 1,\n  Green,\n  Blue\n}\nlet color: Color = Color.Green;\nconsole.log(color);\n```',
        choices: ['1', '2', '3', 'Green'],
        answer: '2',
    },
    {
        question: 'How do you declare an array of strings in TypeScript?\n\n```typescript\nlet arr: ______;\n```',
        choices: ['string[]', 'Array<string>', 'both', 'none'],
        answer: 'both',
    },
    {
        question: 'What will be the output of the following code?\n\n```typescript\nlet value: any = "This is a string";\nlet length: number = (value as string).length;\nconsole.log(length);\n```',
        choices: ['undefined', '0', '16', 'NaN'],
        answer: '16',
    },
    {
        question: 'What does the following TypeScript code return?\n\n```typescript\nfunction identity<T>(arg: T): T {\n  return arg;\n}\nlet result = identity<string>("Generics");\nconsole.log(result);\n```',
        choices: ['Generics', 'string', 'T', 'number'],
        answer: 'Generics',
    },
];
async function askQuestions() {
    let score = 0;
    for (const { question, choices, answer } of questions) {
        const { userAnswer } = await inquirer.prompt([
            {
                type: 'list',
                name: 'userAnswer',
                message: question,
                choices: choices,
            },
        ]);
        if (userAnswer === answer) {
            score++;
            console.log(chalk.green('Correct!'));
        }
        else {
            console.log(chalk.red(`Incorrect! The correct answer is: ${answer}`));
        }
        console.log(); // New line for better readability
    }
    console.log(chalk.blue(`Quiz complete! Your score is ${score} out of ${questions.length}`));
}
askQuestions().catch(error => console.error(chalk.red('An error occurred:'), error));
