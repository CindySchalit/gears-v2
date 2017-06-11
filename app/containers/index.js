import React, { Component } from 'react'
import SpeedSliderContainer from './SpeedSliderContainer'
import PedalPressureSliderContainer from './PedalPressureSliderContainer'

export default class AllSliders extends Component {
  render() {
    return (
      <div>
        <h1>Shift My Gear!</h1>
        <SpeedSliderContainer />
        <PedalPressureSliderContainer />
      </div>
   );
  }
}
