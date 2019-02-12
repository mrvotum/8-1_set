// import Character from './app';

export default class Team {
  constructor() { // создаём новый пустой массив
    this.characterSet = new Set(); // записываем, что там будут храниться "characterSet"
  }

  add(character) {
    if (this.characterSet.has(character)) {
      throw TypeError('Нельзя дважды добавить игрока в команду');
    }
    if (this.characterSet.size >= 5) {
      throw TypeError('В команду можно добавить только 5 игроков');
    } else {
      this.characterSet.add(character);
    }
  }

  addAll(...players) {
    for (const player of players) {
      if (this.characterSet.has(player)) {
        // при попытке забить массив одним и тем же героем
        throw TypeError('Нельзя дважды добавить игрока в команду');
      }
      if (this.characterSet.size >= 5) {
        throw TypeError('В команду можно добавить только 5 игроков');
      } else {
        this.characterSet.add(player);
      }
    }
  }

  toArray() {
    return [...this.characterSet];
  }
}
