import { SET_SPEED, SET_PEDAL_PRESSURE } from '../constants'

const initialState = {
  speed: 0,
  pedalPressure: 0,
}

const rootReducer = function(state = initialState, action) {
  const newState = Object.assign({}, state);

  switch(action.type) {
    case SET_SPEED:
      newState.speed = action.speed;
      return newState;

    case SET_PEDAL_PRESSURE:
      newState.pedalPressure = action.pedalPressure;
      return newState;

    default:
      return state
  }
};

export default rootReducer
