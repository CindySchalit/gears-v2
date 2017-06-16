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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setGear: (gear) => dispatch(setGear(gear))
//   }
// }

const GearContainer = (props) => {
  console.log('~~~~~ props in GearContainer:', props)
  return (
    <h1>
      {parseInt(props.pedalPressure) + parseInt(props.speed) + parseInt(props.rpm)}
    </h1>
  )
}

export default connect(mapStateToProps)(GearContainer)
