import React, { Component } from 'react'
import SpeedSliderContainer from './SpeedSliderContainer'
import PedalPressureSliderContainer from './PedalPressureSliderContainer'

export default class AllSliders extends Component {
  render() {
    return (
      <div>
        <h1>Bad Fish Gear Shifter</h1>
        <center>
          <img
            src="http://drshaunayoung.com/wp-content/uploads/2013/07/mean-fish.png"
            height="100"
            width="100"
          />
        </center>
        <PedalPressureSliderContainer />
        <SpeedSliderContainer />
      </div>
   );
  }
}
