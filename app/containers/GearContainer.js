import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setGear } from '../action-creators/speed'

const mapStateToProps = (state) => {
  return {
    pedalPressure: state.pedalPressure,
    speed: state.speed,
    rpm: state.rpm,
  }
}

const GearContainer = (props) => {
  console.log('~~~~~ props in GearContainer:', props)
  const pedalPressure = parseInt(props.pedalPressure)
  const speed = parseInt(props.speed)
  const rpm = parseInt(props.rpm)

  return (
    <h1 id="gear">{rpm}</h1>
  )
}

export default connect(mapStateToProps)(GearContainer)
