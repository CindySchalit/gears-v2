import React, { Component } from 'react';

export default class SpeedSlider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input id="mySlider"
           value={this.props.speed}
           type="range"
           min={0}
           max={5}
           onChange={this.props.handleChange}
           step={1} />
        <button
          className="btn btn-default btn-xs"
          onClick={this.props.handleClick}>
        Set Speed</button>
      </div>
   );
  }
}
