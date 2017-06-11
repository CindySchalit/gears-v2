import React, { Component } from 'react';

export default class PedalPressureSlider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="pedal">
        <h3>Accelerator Pedal Pressure</h3>
        <input id="mySlider"
           value={this.props.pedalPressure}
           type="range"
           min={0}
           max={5}
           onChange={this.props.handleChange}
           step={1} />
        <h4>Pedal Pressure Placeholder</h4>
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
