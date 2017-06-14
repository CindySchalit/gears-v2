import React, { Component } from 'react'

const pressureTypes = {
  0: 'no',
  1: 'light',
  2: 'heavy',
}

export default class PedalPressureSlider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="pedal">
        <h2>Accelerator Pedal Pressure</h2>
        <input id="mySlider"
           value={this.props.pedalPressure}
           type="range"
           min={0}
           max={2}
           onChange={this.props.handleChange}
           onMouseUp={this.props.handleStop}
           step={1} />
        <h3>You are applying {pressureTypes[this.props.pedalPressure.toString()]} pressure to the pedal!</h3>
      </div>
   );
  }
}
