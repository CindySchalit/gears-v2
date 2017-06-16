import React, { Component } from 'react'
import { connect } from 'react-redux'
import Slider from 'rc-slider'
import { setRpm } from '../action-creators/rpm'
import setRpmInContainer from './rpmFormula'

const style = {width: 800, margin: 50}

const marks = {
  0: '0 RPMs',
  1000: '1,000',
  2000: '2,000',
  3000: '3,000',
  4000: '4,000',
  5000: '5,000',
  6000: '6,000',
  7000: '7,000',
  8000: '8,000',
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

const mapDispatchToProps = (dispatch) => {
  return {
    setRpmDispatcher: (rpm) => dispatch(setRpm(rpm))
  }
}

class RpmContainer extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this)
  }

  onChange (value) {
    this.props.setRpmDispatcher(this.props.rpm)
  }

  componentWillReceiveProps(nextProps) {
    this.props.setRpmDispatcher(nextProps.rpm)
  }

  render() {
    return (
      <div style={style}>
        <h2 id="rpm">Revolutions Per Minute (RPM)</h2>
        <Slider
          value={this.props.rpm}
          onChange={this.onChange}
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

export default connect(mapStateToProps, mapDispatchToProps)(RpmContainer)


