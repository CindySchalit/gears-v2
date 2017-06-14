import React, { Component } from 'react';
import RpmSlider from '../components/RpmSlider';
import { setRpm } from '../action-creators/rpm';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  let pedalPressureInRpm = null
  let speedInRpm = null

  if (state) {
    pedalPressureInRpm = state.pedalPressure
    speedInRpm = state.speed
  }

  return {
    pedalPressure: pedalPressureInRpm,
    speed: speedInRpm,
  }
}

export default connect(mapStateToProps)(RpmSlider)
