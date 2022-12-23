import { Character } from '../character';

test('should be created correct character', () => {
  const character = new Character('name', 'Bowman', 100, 1, 1, 1);
  expect(character).toEqual({
    name: 'name',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 1,
    defence: 1,
  });
});

test('should be error by name short', () => {
  try {
    new Character('n', 'Bowman', 100, 1, 1, 1);
  } catch (error) {
    expect(error.message).toBe('Incorrect name');
  }
});

test('should be error by name long', () => {
  try {
    new Character('namenamename', 'Bowman', 100, 1, 1, 1);
  } catch (error) {
    expect(error.message).toBe('Incorrect name');
  }
});

test('should be error by type', () => {
  try {
    new Character('name', 'Bowmans', 100, 1, 1, 1);
  } catch (error) {
    expect(error.message).toBe('Incorrect type');
  }
});
