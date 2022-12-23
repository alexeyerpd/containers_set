export class Character {
  constructor(name, type, health, level, attack, defence) {
    if (!name || name.length < 2 || name.length > 10) {
      throw new Error('Incorrect name');
    }

    if (
      ![
        'Bowman',
        'Swordsman',
        'Magician',
        'Daemon',
        'Undead',
        'Zombie',
      ].includes(type)
    ) {
      throw new Error('Incorrect type');
    }

    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }
}
