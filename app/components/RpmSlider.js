import React, { Component } from 'react';

export default class RpmSlider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('PROPS IN RpmSlider Component:', this.props)
    return (
      <div id="rpm">
        <h2>Revolutions Per Minute (RPM)</h2>
      </div>
   );
  }
}
