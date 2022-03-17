import Person from './Person';

class Team {
  constructor() {
    this.members = {
      zombie: new Person(
        'Зомби',
        'Zombie',
        50,
        1,
        10,
        40,
      ),
      vampire: new Person(
        'Вампир',
        'Vampire',
        50,
        1,
        10,
        40,
      ),
      bowman: new Person(
        'Лучник',
        'Bowman',
        50,
        1,
        10,
        40,
      ),
    };
  }
}

const team = new Team();
team[Symbol.iterator] = function display() {
  const { members } = this;
  const keys = Object.keys(members);
  let i = -1;

  return {
    next() {
      if (i < keys.length - 1) {
        i += 1;
        return {
          done: false,
          value: members[keys[i]],
        };
      }

      return {
        done: true,
      };
    },
  };
};

for (const member of team) {
  console.log(member);
}
