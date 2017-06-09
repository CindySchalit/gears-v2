import { SET_SPEED } from '../constants'

const initialState = {
  speed: 25,
}

const rootReducer = function(state = initialState, action) {
  const newState = Object.assign({}, state);

  switch(action.type) {
    case SET_SPEED:
      newState.speed = action.speed;
      return newState;

    default:
      return state
  }
};

export default rootReducer
