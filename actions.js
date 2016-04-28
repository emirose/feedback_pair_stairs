export const ADD_PERSON = 'ADD_PERSON';

export function addPerson(name) {
  return { type: ADD_PERSON, name: name}
}
