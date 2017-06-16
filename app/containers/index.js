import React, { Component } from 'react'
import SpeedContainer from './SpeedContainer'
import PressureContainer from './PressureContainer'
import RpmContainer from './RpmContainer'

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
          <RpmContainer className="rc-slider" id="right"/>
          <SpeedContainer className="rc-slider" id="center"/>
        </div>
      </div>
   );
  }
}
