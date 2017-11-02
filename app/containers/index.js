import React, { Component } from 'react'
import PressureContainer from './PressureContainer'
import SpeedContainer from './SpeedContainer'
import RpmContainer from './RpmContainer'
import GearContainer from './GearContainer'

export default class AllSliders extends Component {
  render() {
    return (
      <div id="App">
        <div id="App-Header">
          <h1>Bad Fish Gear Shifter</h1>
          <img
            id="fish"
            src="bad-fish.png"/>
        </div>
        <div id="container">
          <PressureContainer />
          <SpeedContainer />
          <RpmContainer />
        </div>
        <center>
          <GearContainer/>
        </center>
      </div>
   );
  }
}
