import React, { Component } from 'react'
import SpeedContainer from './SpeedContainer'
import PressureContainer from './PressureContainer'
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
            src="http://drshaunayoung.com/wp-content/uploads/2013/07/mean-fish.png"/>
        </div>
        <div id="container">
          <PressureContainer className="rc-slider" id="left"/>
          <SpeedContainer className="rc-slider" id="right"/>
          <RpmContainer className="rc-slider" id="center"/>
        </div>
        <center className="center-div">
          <GearContainer/>
        </center>
        <p id="space"></p>
      </div>
   );
  }
}
