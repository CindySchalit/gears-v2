import React, { Component } from 'react';

export default class SpeedSlider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Speed (mph)</h3>
        <input id="mySlider"
           value={this.props.speed}
           type="range"
           min={0}
           max={110}
           onChange={this.props.handleChange}
           step={1} />
        <h4>You are currently traveling at {this.props.speed} mph!</h4>
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
