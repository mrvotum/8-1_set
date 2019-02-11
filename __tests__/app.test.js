import convertToNumber from '../js/convertToNumber';

test('Base 10', () => {
  const input = 10;

  const expected = 10; // ожидает
  const received = convertToNumber(input); // получает
  expect(received).toBe(expected); // сравнивает
});

test('Different letters', () => {
  const input = 'Десять';

  const received = () => convertToNumber(input); // получает ошибку
  expect(received).toThrow(); // ждёт ошибку
});