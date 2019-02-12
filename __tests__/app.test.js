import Team from '../src/js/class-team';
import Character from '../src/js/app';

test('Characters creating', () => {
  const inputCharacter = new Character('Rick', 'Cucumber');

  const expected = { // ожидает
    name: 'Rick',
    type: 'Cucumber',
    level: 1,
  };

  const received = inputCharacter; // получает
  expect(received).toEqual(expected); // сравнивает
});

test('Characters add, all ok', () => {
  const inputPlayer_1 = new Character('Rick', 'Cucumber');
  const inputPlayer_2 = new Character('Red', 'Ranger');
  const inputPlayer_3 = new Character('Mario', 'Brother');

  const inputTeam = new Team();

  const expected = { // ожидает
    characterSet: new Set([inputPlayer_1, inputPlayer_2, inputPlayer_3]),
  };

  inputTeam.add(inputPlayer_1); // получает
  inputTeam.add(inputPlayer_2);
  inputTeam.add(inputPlayer_3);
  expect(inputTeam).toEqual(expected); // сравнивает
});

test('Characters add, > 5, = error', () => {
  const inputPlayer_1 = new Character('Rick', 'Cucumber');
  const inputPlayer_2 = new Character('Red', 'Ranger');
  const inputPlayer_3 = new Character('Mario', 'Brother');
  const inputPlayer_4 = new Character('Luigi', 'Brother');
  const inputPlayer_5 = new Character('Neo', 'Seller');
  const inputPlayer_6 = new Character('Leo', 'Magician');

  const inputTeam = new Team();

  inputTeam.add(inputPlayer_1);
  inputTeam.add(inputPlayer_2);
  inputTeam.add(inputPlayer_3);
  inputTeam.add(inputPlayer_4);
  inputTeam.add(inputPlayer_5);

  const received = () => inputTeam.add(inputPlayer_6); // получает ошибку
  expect(received).toThrow(); // ждёт ошибку
});

test('Characters add, the same characters, = error', () => {
  const inputPlayer_1 = new Character('Rick', 'Cucumber');
  const inputPlayer_2 = new Character('Red', 'Ranger');
  const inputPlayer_3 = new Character('Mario', 'Brother');

  const inputTeam = new Team();

  inputTeam.add(inputPlayer_1);
  inputTeam.add(inputPlayer_2);
  inputTeam.add(inputPlayer_3);

  const received = () => inputTeam.add(inputPlayer_2); // получает ошибку
  expect(received).toThrow(); // ждёт ошибку
});

test('Characters addAll, all ok', () => {
  const inputPlayer_1 = new Character('Rick', 'Cucumber');
  const inputPlayer_2 = new Character('Red', 'Ranger');
  const inputPlayer_3 = new Character('Mario', 'Brother');
  const inputPlayer_4 = new Character('Luigi', 'Brother');
  const inputPlayer_5 = new Character('Neo', 'Seller');

  const inputTeam = new Team();

  const expected = { // ожидает
    characterSet: new Set([inputPlayer_1, inputPlayer_2, inputPlayer_3,
      inputPlayer_4, inputPlayer_5]),
  };

  inputTeam.addAll(inputPlayer_1, inputPlayer_2, inputPlayer_3,
    inputPlayer_4, inputPlayer_5); // получает
  expect(inputTeam).toEqual(expected); // сравнивает
});

test('Characters addAll, > 5, = error', () => {
  const inputPlayer_1 = new Character('Rick', 'Cucumber');
  const inputPlayer_2 = new Character('Red', 'Ranger');
  const inputPlayer_3 = new Character('Mario', 'Brother');
  const inputPlayer_4 = new Character('Luigi', 'Brother');
  const inputPlayer_5 = new Character('Neo', 'Seller');
  const inputPlayer_6 = new Character('Leo', 'Magician');

  const inputTeam = new Team();

  const received = () => inputTeam.addAll(inputPlayer_1, inputPlayer_2, inputPlayer_3,
    inputPlayer_4, inputPlayer_5, inputPlayer_6); // получает ошибку
  expect(received).toThrow(); // ждёт ошибку
});

test('Characters addAll, the same characters, = error', () => {
  const inputPlayer_1 = new Character('Rick', 'Cucumber');
  const inputPlayer_2 = new Character('Red', 'Ranger');
  const inputPlayer_3 = new Character('Mario', 'Brother');
  const inputTeam = new Team();

  const received = () => inputTeam.addAll(inputPlayer_1, inputPlayer_2, inputPlayer_3,
    inputPlayer_3); // получает ошибку
  expect(received).toThrow(); // ждёт ошибку
});

test('Characters toArray', () => {
  const inputPlayer_1 = new Character('Rick', 'Cucumber');
  const inputPlayer_2 = new Character('Red', 'Ranger');
  const inputPlayer_3 = new Character('Mario', 'Brother');
  const inputTeam = new Team();

  inputTeam.addAll(inputPlayer_1, inputPlayer_2, inputPlayer_3);

  const expected = [inputPlayer_1, inputPlayer_2, inputPlayer_3]; // ожидает
  const received = inputTeam.toArray(); // получает

  expect(received).toEqual(expected);
});
