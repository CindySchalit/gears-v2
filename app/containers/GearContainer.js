import React, { Component } from 'react'
import { connect } from 'react-redux'
import calculateGear from './selectors/gearFormula'

const mapStateToProps = (state) => {
  const pedalPressure = state.pedalPressure
  const speed = state.speed
  const gear = calculateGear(pedalPressure, speed)

  return {
    gear,
  }
}

const GearContainer = (props) => {
  const gear = props && props.gear

  return (
    <h1 id="gear">{gear} Gear!</h1>
  )
}

export default connect(mapStateToProps)(GearContainer)
