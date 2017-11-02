import React, { Component } from 'react'
import { connect } from 'react-redux'
import Slider from 'rc-slider'
import { setSpeed } from '../action-creators/speed'

const marks = {
  0: '0',
  20: '20',
  40: '40',
  60: '60',
  80: '80',
  100: '100',
}

const mapStateToProps = (state) => {
  return {
    pedalPressure: state.pedalPressure,
    speed: state.speed,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSpeedDispatcher: (speed) => dispatch(setSpeed(speed))
  }
}

class SpeedContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speed: 0,
    }

    this.onSliderChange = this.onSliderChange.bind(this)
  }

  onSliderChange (value) {
    if (!this.props.pedalPressure) {
      this.setState({
        speed: 0,
      })
    }

    else {
      this.setState({
        speed: value,
      })

      this.props.setSpeedDispatcher(this.state.speed)

      this.setState({
        speed: value,
      })
    }
  }

  render() {
    return (
      <div id="slider">
        <h2 id="speed">How fast do you want to go? (mph)</h2>
        <Slider
          value={this.state.speed}
          onChange={this.onSliderChange}
          min={0}
          max={110}
          marks={marks}
          step={1}
        />
        <h3 id="speed">You are going {this.state.speed} mph!</h3>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpeedContainer)
