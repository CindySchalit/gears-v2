import React, { Component } from 'react'
import { connect } from 'react-redux'
import SpeedSlider from '../components/SpeedSlider'
import { setSpeed } from '../action-creators/speed'

const mapStateToProps = (state) => {
  return {
    speed: state.speed
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSpeedDispatcher: (speed) => dispatch(setSpeed(speed))
  }
}

class SpeedSliderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speed: this.props.speed,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      speed: event.target.value,
    })
  }

  handleClick(event) {
    this.setState({
      speed: event.target.value,
    })
    this.props.setSpeedDispatcher(this.state.speed)
    this.setState({
      speed: this.state.speed,
    })
  }

  render() {
    return (
      <SpeedSlider
        speed={this.state.speed}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpeedSliderContainer)
