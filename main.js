// let firstName = prompt('Digite o seu Nome: ');
// let lastName = prompt('Digite o seu Sobrenome: ');
// let age = prompt('Digite a sua idade: ');
// const age2 = 2;
// age = Number(age);
// age += age2;

// console.log(`Meu nome é ${firstName} ${lastName}`);
// console.log(`Eu tenho ${age} anos`);
//firstName = `Hello ${firstName}`;
//document.getElementById('greeting').innerHTML = firstName;

// let friends = ['Chandler', 'Ross', 'Monica', 'Rachel'];
// friends[0] = 'Joey';
// friends.push('Phoebe');
// friends.slice('Ross');
// console.log(friends);

// let celsius = parseFloat(prompt('Enter the temperature in Celsius'));
// let fahrenheit = celsius * (9 / 5) + 32;

// alert(`The temperature is ${fahrenheit.toFixed(2)} degrees fahrenheit`);

// let fruitsList = ['banana', 'orange', 'apple', 'papaya', 'lemon'];

// let numberList = document.getElementById('numberList');

// for (let i = 0; i < fruitsList.length; i++) {
//   let item = document.createElement('li');
//   item.textContent = fruitsList[i];
//   numberList.appendChild(item);
// }

// colors = ['orange', 'red', 'blue', 'green', 'purple'];

// function changeColor() {
//   let body = document.getElementById('body');
//   let number = Math.floor(Math.random() * colors.length);
//   let color = colors[number];
//   body.style.backgroundColor = color;
// }

// function checkAge() {
//   let age = document.getElementById('age').value;
//   age > 18 ? alert('You are an adult') : alert('You are not an adult');
// }

// let checkButton = document.getElementById('checkButton');
// checkButton.addEventListener('click', () => {
//   checkAge();
// });

// let userNum1 = document.getElementById('userNum1');
// let userNum2 = document.getElementById('userNum2');
// let calculate = document.getElementById('calculate');
// let operator = document.getElementById('operator');
// let result = document.getElementById('result');

// calculate.addEventListener('click', () => {
//   console.log(operator);
//   let num1 = Number(userNum1.value);
//   let num2 = Number(userNum2.value);
//   console.log(num1);
//   console.log(typeof num1);
//   switch (operator.value) {
//     case '+':
//       result.innerHTML = num1 + num2;
//       break;
//     case '-':
//       result.innerHTML = num1 - num2;
//       break;
//     case '*':
//       result.innerHTML = num1 * num2;
//       break;
//     case '/':
//       result.innerHTML = num1 / num2;
//       break;
//     default:
//       break;
//   }
// });
let userNum1 = document.getElementById('userNum1');
let userNum2 = document.getElementById('userNum2');
let calculate = document.getElementById('calculate');
let result = document.getElementById('result');

let stringResult = '';

calculate.addEventListener('click', () => {
  num1 = Number(userNum1.value);
  num2 = Number(userNum2.value);
  let i = num1;
  while (i <= num2) {
    if (i % 2 == 0) {
      stringResult += i;
      stringResult += ' ';
    }
    i++;
  }
  result.innerHTML = stringResult;
});
