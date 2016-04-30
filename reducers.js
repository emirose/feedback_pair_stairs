import {ADD_TEAM_MEMBER} from "./actions.js";

let initialState = {teamMembers: [] };

const reducers =  (state=initialState, action) => {
  switch (action.type) {
    case ADD_TEAM_MEMBER:
       return Object.assign({}, state, {
        teamMembers: addTeamMemberIfNotAlreadyPresent(action.name, state.teamMembers)
     })
    default:
      return state
  }
}

let addTeamMemberIfNotAlreadyPresent =  (name, teamMembers) => {
  if(teamMembers.includes(name)) {
    return teamMembers;
  }
  return [...teamMembers, name]
}
export default reducers;
