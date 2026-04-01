const calculadora = require('../src/calculadora');

test('soma 3 + 3 = 6', () => {
  expect(calculadora.soma(3, 3)).toBe(6);
});

test('multiplicação 2 * 3 = 6', () => {
  expect(calculadora.multiplicacao(2, 3)).toBe(6);
});

test('subtração 3 - 2 = 1', () => {
  expect(calculadora.subtracao(3, 2)).toBe(1);
});