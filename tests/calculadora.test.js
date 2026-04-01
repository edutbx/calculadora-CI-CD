const calculadora = require('../src/calculadora');

test('soma 2 + 3 = 5', () => {
  expect(calculadora.soma(2, 3)).toBe(5);
});

test('multiplicação 2 * 3 = 6', () => {
  expect(calculadora.multiplicacao(2, 3)).toBe(6);
});

test('subtração 3 - 2 = 1', () => {
  expect(calculadora.subtracao(3, 2)).toBe(1);
});