import React, { Component } from 'react'
import { connect } from 'react-redux'
import calculateGear from './gearFormula'

const mapStateToProps = (state) => {
  return {
    pedalPressure: state.pedalPressure,
    speed: state.speed,
  }
}

const GearContainer = (props) => {
  const pedalPressure = parseInt(props.pedalPressure)
  const speed = parseInt(props.speed)

  const gear = calculateGear(pedalPressure, speed)

  return (
    <h1 id="gear">{gear} Gear!</h1>
  )
}

export default connect(mapStateToProps)(GearContainer)
