import React, { Component } from 'react'
import { connect } from 'react-redux'
import RpmSlider from '../components/RpmSlider'
import { setRpm } from '../action-creators/rpm'
import setRpmInContainer from './rpmFormula'

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
