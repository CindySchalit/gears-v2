import React, { Component } from 'react'
import { connect } from 'react-redux'
import Slider from 'rc-slider'
// import { setRpm } from '../action-creators/rpm'
import setRpmInContainer from './rpmFormula'

const style = {width: 800, margin: 100}

const marks = {
  0: '0 RPMs',
  1000: '1',
  2000: '2',
  3000: '3',
  4000: '4',
  5000: '5',
  6000: '6',
  7000: '7',
  8000: '8',
}

const mapStateToProps = (state) => {
  let pedalPressureInRpm = null
  let speedInRpm = null

  if (state) {
    pedalPressureInRpm = state.pedalPressure
    speedInRpm = state.speed
  }

  let rpm = setRpmInContainer(parseInt(pedalPressureInRpm), parseInt(speedInRpm))

  return {
    pedalPressure: pedalPressureInRpm,
    speed: speedInRpm,
    rpm,
  }
}

class RpmContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={style}>
        <h2 id="rpm">Revolutions Per Minute (in 1,000 RPMs)</h2>
        <Slider
          value={this.props.rpm}
          min={0}
          max={8000}
          marks={marks}
          step={1}
        />
        <div>
            { this.props.rpm < 7999
                ? <h3 id="rpm">Your engine is turning at {this.props.rpm} RPMs!</h3>
                : <h3 id="rpm">YOUR ENGINE IS GOING TO EXPLODE!</h3>
            }
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(RpmContainer)


