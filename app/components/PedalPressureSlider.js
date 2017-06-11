import React, { Component } from 'react';

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
           step={1} />
        <h4>You are applying {pressureTypes[this.props.pedalPressure.toString()]} pressure to the pedal!</h4>
        <div>
          <button
            className="btn btn-default btn-xs"
            onClick={this.props.handleClick}
           >
          Set Pedal Pressure</button>
        </div>
      </div>
   );
  }
}
