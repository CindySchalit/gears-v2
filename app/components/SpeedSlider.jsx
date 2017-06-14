import React, { Component } from 'react';

export default class SpeedSlider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="speed">
        <h2>Speed</h2>
        <input id="mySlider"
           value={this.props.speed}
           type="range"
           min={0}
           max={110}
           onChange={this.props.handleChange}
           onMouseUp={this.props.handleStop}
           step={1} />
        <h3>You are traveling at {this.props.speed} mph!</h3>
      </div>
   );
  }
}
