const assert = require('assert');
const mathFunctions = require('./mathFunctions.js');

it('верно находит корень из 16', () => {
  assert.equal(mathFunctions.sqrt(16), 4);
});

it('не вычисляет корень из отрицательного числа', () => {
  assert.equal(mathFunctions.sqrt(-16), "Нельзя взять корень из отрицательного числа");
});

it('не делит на 0', () => {
  assert.equal(mathFunctions.divide(-16, 0), "Нельзя делить на ноль");
});

it('верно возводит число 5 во степень 2', () => {
  assert.equal(mathFunctions.pow(5, 2), 25);
});

it('верно вычисляет сумму 10 и 31', () => {
  assert.equal(mathFunctions.add(10, 31), 41);
});

it('верно вычисляет сумму -10 и -11', () => {
  assert.equal(mathFunctions.add(-10, -11), -21);
});

it('верно вычисляет разность 3 и 3', () => {
  assert.equal(mathFunctions.subtract(3, 3), 0);
});

it('верно вычисляет произведение 10 и 10', () => {
  assert.equal(mathFunctions.multiply(10, 10), 100);
});

it('верно вычисляет частное 26 и 2', () => { 
  assert.equal(mathFunctions.divide(26, 2), 13);
});

it('выводит ошибку при использовании строки вместо числа', () => {
  assert.equal(mathFunctions.checkInput('text', 51), false);
});

it('ыводит ошибку при при использовании двух строк вместо чисел', () => {
  assert.equal(mathFunctions.checkInput('text', 'text'), false);
});

it('проходит валидацию при вводе двух чисел', () => {
  assert.equal(mathFunctions.checkInput(51, 51), true);
});