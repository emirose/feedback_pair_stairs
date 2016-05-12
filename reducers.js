import {combineReducers} from "redux";
import {ADD_TEAM_MEMBER, APPEND_TO_NAME} from "./actions.js";

const teamMembers = (state = [], action) => {
  switch (action.type) {
    case ADD_TEAM_MEMBER:
      return addTeamMemberIfNotAlreadyPresent(action.name, state);
    case APPEND_TO_NAME:
      let newState = state.map(oldName => {
        return oldName == action.name ? oldName + ' wazzup' : oldName;
      })
      return newState;
    default:
      return state;
  }
}

let addTeamMemberIfNotAlreadyPresent =  (name, teamMembers) => {
  if(teamMembers.includes(name)) {
    return teamMembers;
  }
  return [...teamMembers, name]
}
export default combineReducers({teamMembers});
