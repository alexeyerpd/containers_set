import { Team } from '../team';
import { Bowman } from '../bowman';

let team;

beforeEach(() => {
  team = new Team();
});

test('Team - test toArray', () => {
  const bowman = new Bowman('лучник');
  team.add(bowman);

  expect(team.toArray()).toEqual([bowman]);
});

test('Team - add character', () => {
  const bowman = new Bowman('лучник');
  team.add(bowman);

  expect(team.toArray()).toEqual([bowman]);
});

test('Team - should be error after added second the same character', () => {
  const bowman = new Bowman('лучник');
  team.add(bowman);

  try {
    team.add(bowman);
  } catch (error) {
    expect(error.message).toBe('такой объект уже существует в команде');
  }
});

test('Team - add several character', () => {
  const bowman1 = new Bowman('лучник');
  const bowman2 = new Bowman('лучник');
  team.addAll(bowman1, bowman2);

  expect(team.toArray()).toEqual([bowman1, bowman2]);
});

test('Team - should be not error after added several the same characters', () => {
  const bowman = new Bowman('лучник');

  try {
    team.addAll(bowman, bowman, bowman);
    expect(team.toArray()).toEqual([bowman]);
  } catch (error) {
    expect(error.message).not.toBe('такой объект уже существует в команде');
  }
});
