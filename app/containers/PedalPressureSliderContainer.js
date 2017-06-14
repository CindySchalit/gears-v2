import React, { Component } from 'react'
import PedalPressureSlider from '../components/PedalPressureSlider'
import { setPedalPressure } from '../action-creators/pedalPressure'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    pedalPressure: state.pedalPressure,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPedalPressureDispatcher: (pedalPressure) => dispatch(setPedalPressure(pedalPressure))
  }
}

class PedalPressureSliderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pedalPressure: this.props.pedalPressure,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleStop = this.handleStop.bind(this);
  }

  handleChange(event) {
    this.setState({
      pedalPressure: event.target.value,
    })
  }

  handleStop(event) {
    this.setState({
      pedalPressure: event.target.value,
    })
    this.props.setPedalPressureDispatcher(this.state.pedalPressure)
    this.setState({
      pedalPressure: this.state.pedalPressure,
    })
  }

  render() {
    return (
      <PedalPressureSlider
        pedalPressure={this.state.pedalPressure}
        handleChange={this.handleChange}
        handleStop={this.handleStop}
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PedalPressureSliderContainer)

