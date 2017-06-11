import React, { Component } from 'react';
import SpeedSlider from '../components/SpeedSlider';
import { setSpeed } from '../action-creators/speed';
import { connect } from 'react-redux';

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
        handleChange={this.handleChange}
        speed={this.state.speed}
        handleClick={this.handleClick}
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpeedSliderContainer)
