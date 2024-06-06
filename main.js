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

let colorList = [];

for (let i = 0; i < 3; i++) {
  let tempColor = prompt('Type a colour');
  colorList.push(tempColor);
}

document.getElementById('colorList').innerHTML = colorList;
