import {ADD_TEAM_MEMBER} from "./actions.js";

let initialState = {teamMembers: [] };

const reducers =  (state=initialState, action) => {
  switch (action.type) {
    case ADD_TEAM_MEMBER:
      return Object.assign({}, state, {
        teamMembers: [
          ...state.teamMembers,
          action.name
        ]
     })
    default:
      return state
  }
}

export default reducers;
