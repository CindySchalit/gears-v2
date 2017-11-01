import React, { Component } from 'react'
import GridComponent from './GridComponent'
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
          <GridComponent />
        </div>
        <div id="gear">
          <GearContainer/>
        </div>
      </div>
   );
  }
}
