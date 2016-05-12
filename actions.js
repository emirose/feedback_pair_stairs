export const ADD_TEAM_MEMBER = 'ADD_TEAM_MEMBER';
export const APPEND_TO_NAME = 'APPEND_TO_NAME';

export function addTeamMember(name) {
  return { type: ADD_TEAM_MEMBER, name: name}
}

export function appendToName(name){
  return { type: APPEND_TO_NAME, name: name }
}

export function addTeamMemberAsync(name) {
    return function(dispatch, getState) {
      setTimeout(() => {
        dispatch(addTeamMember(name))
      }, 1000);
  }
}
