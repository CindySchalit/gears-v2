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
           step={1} />
        <h3>You are traveling at {this.props.speed} mph!</h3>
        <div>
          <button
            className="btn btn-default btn-xs"
            onClick={this.props.handleClick}>
          Set Speed</button>
        </div>
      </div>
   );
  }
}
