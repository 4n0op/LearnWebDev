//DISPLAYS//
console.log('Hello World');

//VARIABLES//
let name = 'Wampa'; //Wampa is a string.
//To define variables in JS you use the word 'let'.
//Shown above the way to define a variable would be to use let then the variable name and then the thing that is being stored inside the variable. 
//There are some words that can't be used as a variable because JS will think you are trying to use something else. For example (if, else, and var) can not be used.
//Variables can't start with a number. And they can't contain a space or hypher. Instead you should use camel notation. (firstName)
let age = "13", height = "7'5"; //13 is a integer.
//Here you can see that you can define 2 variables in the same line by seperating them with a comma.
let isApproved = false; //False is a boolean.
console.log(name);
//This is how you can display a variable.
let interestRate = 0.3;
interestRate = 1;
console.log(interestRate)
//Since there are 2 different things the variable is told to store it goes with the latest thing it was told.
const risingRate = 0.3;
risingRate = 1;
console.log(risingRate)
//If you want to keep your variable the same throughout your code you can use const (constant). This will give you an error on line 17 because you tried to re-define it after you already used constant.
let person = {
    name: 'Wampa',
    age: '13'
};
//Using this command lets a variable hold 2 more variables inside of it. This also means that you don't need to define the variable anywhere in code.
console.log(person);
//If you were to open console you can see the name and age.
person.name = 'John'; //This is dot notation
person['name'] = 'Mary'; //This is bracket notation
console.log(person.name);

//ARRAYS//
let chosenColors = ['green', 'blue'];
//This is an array that displays different objects.
chosenColors[2] = 'red';
chosenColors[2] = '2';
//To add an object you have to pick the slot and the object you'd like to add. You can also add integers to the array.
console.log(chosenColors);
//This allows you to see the arry in console.
console.log(chosenColors.length);
//If you add .length to the end it shows how many objects were in the array.

//FUNCTIONS//
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}
greet('John', 'Smith');
//The command above easily allows you to display text whenever you simply write greet();
