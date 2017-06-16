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
        <div>
          <PressureContainer className="rc-slider"/>
          <SpeedContainer className="rc-slider"/>
          <RpmContainer className="rc-slider"/>
        </div>
      </div>
   );
  }
}
