import React, { Component } from 'react'
import SpeedSliderContainer from './SpeedSliderContainer'
import PedalPressureSliderContainer from './PedalPressureSliderContainer'

const pressureTypes = {

}

export default class AllSliders extends Component {
  render() {
    return (
      <div>
        <h1>Bad Fish Gear Shifter</h1>
        <PedalPressureSliderContainer />
        <SpeedSliderContainer />
      </div>
   );
  }
}
