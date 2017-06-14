import React, { Component } from 'react';

export default class RpmSlider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('PROPS IN RpmSlider:', this.props)

    let pedalPressure = null
    let speed = null
    let rpm = null

    if (this.props) {
      pedalPressure = this.props.pedalPressure
      speed = this.props.speed
      rpm = this.props.rpm
    }

    return (
      <div id="rpm">
        <h2>Revolutions Per Minute (RPM)</h2>
        <h3>The engine is turning at {rpm} RPMs!</h3>
        <button
            className="btn btn-default btn-xs"
            onClick={() => this.props.setRpmDispatcher(rpm) }>
          Confirm RPMs</button>
      </div>
   );
  }
}
