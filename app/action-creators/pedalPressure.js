import { SET_PEDAL_PRESSURE } from '../constants'

export const setPedalPressure = pedalPressure => ({
  type: SET_PEDAL_PRESSURE,
  pedalPressure,
})
