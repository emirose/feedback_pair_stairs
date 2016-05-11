export const ADD_TEAM_MEMBER = 'ADD_TEAM_MEMBER';

export function addTeamMember(name) {
  return { type: ADD_TEAM_MEMBER, name: name}
}

export function addTeamMemberAsync(name) {
    return function(dispatch, getState) {
      setTimeout(() => {
        dispatch(addTeamMember(name))
      }, 1000);
  }
}
