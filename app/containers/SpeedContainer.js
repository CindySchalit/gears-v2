import React, { Component } from 'react'
import { connect } from 'react-redux'
import Slider from 'rc-slider'
import { setSpeed } from '../action-creators/speed'

const style = {width: 800, margin: 100}

const marks = {
  0: '0 mph',
  35: '35 mph',
  60: '60 mph',
  85: '85 mph',
  110: '110 mph',
}

const mapStateToProps = (state) => {
  return {
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
    this.onAfterChange = this.onAfterChange.bind(this)
  }

  onSliderChange (value) {
    this.setState({
      speed: value,
    })
  }

  onAfterChange (value) {
    this.props.setSpeedDispatcher(this.state.speed)
  }

  render() {
    return (
      <div style={style}>
        <h2>How fast do you want to go?</h2>
        <Slider
          value={this.state.speed}
          onChange={this.onSliderChange}
          onAfterChange={this.onAfterChange}
          min={0}
          max={110}
          marks={marks}
          step={1}
        />
        <h3>You are going {this.state.speed} mph!</h3>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpeedContainer)
