import React, { Component } from 'react';

export default class SpeedSlider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('PROPS IN SpeedSlider:', this.props)
    return (
      <input id="mySlider"
         value={this.props.speed}
         type="range"
         min={0}
         max={110}
         onChange={this.props.handleChange}
         step={5} />
   );
  }
}
