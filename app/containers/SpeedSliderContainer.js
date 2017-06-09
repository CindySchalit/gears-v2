import React, { Component } from 'react';
import SpeedSlider from '../components/SpeedSlider';
import { setSpeed } from '../action-creators/speed';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    speed: state.speed
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSpeedDispatcher: (speed) => dispatch(setSpeed(speed))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpeedSlider)
