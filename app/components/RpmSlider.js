import React, { Component } from 'react';

const setRpmInComponent = (pedalPressure, speed) => {
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
  }

  // heavy pressure on pedal

  return rpm + 1000
}

export default class RpmSlider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('~~~~~ props in RPM Component: ', this.props)
    let pedalPressure = null
    let speed = null

    if (this.props) {
      pedalPressure = this.props.pedalPressure
      speed = this.props.speed
    }

    // let rpmInRender = parseInt(pedalPressure) + parseInt(speed)

    let rpmInRender = setRpmInComponent(parseInt(pedalPressure), parseInt(speed))

    return (
      <div id="rpm">
        <h2>Revolutions Per Minute (RPM)</h2>
        <h4>{rpmInRender}</h4>
      </div>
   );
  }
}
