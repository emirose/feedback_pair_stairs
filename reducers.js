import {ADD_PERSON} from "./actions.js";

let initialState = {people: [] };

const reducers =  (state=initialState, action) => {
  switch (action.type) {
    case ADD_PERSON:
      return Object.assign({}, state, {
        people: [
          ...state.people,
          action.name
        ]
     })
    default:
      return state
  }
}

export default reducers;
