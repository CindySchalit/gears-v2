import React, { Component } from 'react';
import RpmSlider from '../components/RpmSlider';
import { setRpm } from '../action-creators/rpm';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    speed: state.speed,
    pedalPressure: state.pedalPressure,
    rpm: state.rpm,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setRpmDispatcher: (pedalPressure, speed) => {
      let rpm = 1000

      // no pressure on pedal
      if (pedalPressure === 0) {
        rpm = 0
        return dispatch(setRpm(rpm))
      }

      // light pressure on pedal
      if (pedalPressure === 1) {
        if (speed < 10) {
          rpm = speed * 228
          return dispatch(setRpm(rpm))
        }

        if (speed < 25) {
          rpm = speed * 133
          return dispatch(setRpm(rpm))
        }

        if (speed < 46) {
          rpm = speed * 94
          return dispatch(setRpm(rpm))
        }

        if (speed < 74)  {
          rpm = speed * 72
        }
      }

      // heavy pressure on pedal
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RpmSlider)
