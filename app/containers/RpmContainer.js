import React, { Component } from 'react'
import { connect } from 'react-redux'
import Slider from 'rc-slider'
import getRpm from './selectors/rpmFormula'

const style = {
  float: "left",
  width: "33%",
  margin: 100
}

const marks = {
  0: '0',
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
  const pedalPressure = state.pedalPressure
  const speed = state.speed

  const rpm = getRpm(parseInt(pedalPressure), parseInt(speed))

  return {
    rpm,
  }
}

class RpmContainer extends Component {
  render() {
    return (
      <div id="slider">
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
