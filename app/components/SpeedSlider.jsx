import React, { Component } from 'react';

export default class SpeedSlider extends Component {
  constructor(props) {
    super(props);
    console.log('PROPS IN SpeedSlider:', this.props);
  }

  render() {
    return (
      <input id="mySlider"
         type="range"
         value={this.props.value}
         min={this.props.min}
         max={this.props.max}
         onInput={this.props.handleChange}
         step={this.props.step} />
   );
  }
}
