
const mathFunctions = require('./mathFunctions.js');
const readline = require('readline');


const inputData = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Пожалуйста, введите два числа:');

inputData.question('Введите число: ', (x) => {
  inputData.question('Введите число: ', (y) => {
    inputData.question(`
Введите номер математической операции:
1. a + b
2. a - b  
3. a * b
4. a / b 
5. a^b
6. sqrt(a)
Вы выбрали: `, (choice) => {
      if (!mathFunctions.checkInput(x, y)) {
        console.log('Можно вводить только числа! Пожалуйста, перезапустите программу.');
      } else {
        switch (choice) {
          case '1':
            console.log(` ${x}  + ${y}  = ${mathFunctions.add(x, y)}.`);
            break;
          case '2':
            console.log(`  ${x} - ${y} =  ${mathFunctions.subtract(x, y)}.`);
            break;
          case '3':
            console.log(`  ${x} * ${y} = ${mathFunctions.multiply(x, y)}.`);
            break;
          case '4':
            console.log(`  ${x} / ${y} = ${mathFunctions.divide(x, y)}.`);
            break;
          case '5':
            console.log(`  ${x}  ^  ${y} = ${mathFunctions.pow(x, y)}.`);
            break;
          case '6':
            console.log(`  sqrt(${x}) = ${mathFunctions.sqrt(x)}.`);
            break;
          default:
            console.log('Вы выбрали неверную команду.');
            break;
        }
      }
      inputData.close();
    });
  });
});