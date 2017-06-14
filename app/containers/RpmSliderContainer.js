import React, { Component } from 'react';
import RpmSlider from '../components/RpmSlider';
import { setRpm } from '../action-creators/rpm';
import { connect } from 'react-redux';

const setRpmInContainer = (pedalPressure, speed) => {
  let rpm

  // no pressure on pedal
  if (pedalPressure === 0) {
    return 0
  }

  // light pressure on pedal
  if (pedalPressure === 1) {
    if (speed < 10) {
      rpm = speed * 228
    }

    if (speed < 25) {
      rpm = speed * 133
    }

    if (speed < 46) {
      rpm = speed * 94
    }

    if (speed < 74)  {
      rpm = speed * 72
    }

    else {
      rpm = 7000
    }
  }

  // heavy pressure on pedal

  return rpm + 1000
}

const mapStateToProps = (state) => {
  let pedalPressureInRpm = null
  let speedInRpm = null

  if (state) {
    pedalPressureInRpm = state.pedalPressure
    speedInRpm = state.speed
  }

  let rpm = setRpmInContainer(parseInt(pedalPressureInRpm), parseInt(speedInRpm))

  return {
    pedalPressure: pedalPressureInRpm,
    speed: speedInRpm,
    rpm,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setRpmDispatcher: (rpm) => dispatch(setRpm(rpm))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RpmSlider)
