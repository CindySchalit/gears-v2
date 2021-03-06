import React, { Component } from 'react'
import { connect } from 'react-redux'
import Slider from 'rc-slider'
import { setPedalPressure } from '../action-creators/pedalPressure'

const marks = {
  0: 'Zzz ...',
  1: 'On the Road',
  2: 'Flooring it!',
}

const pressureTypes = {
  0: 'no',
  1: 'light',
  2: 'heavy',
}

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

class PressureContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pedalPressure: 0,
    }

    this.onSliderChange = this.onSliderChange.bind(this)
    this.onAfterChange = this.onAfterChange.bind(this)
  }

  onSliderChange (value) {
    this.setState({
      pedalPressure: value,
    })
  }

  onAfterChange (value) {
    this.props.setPedalPressureDispatcher(this.state.pedalPressure)
  }

  render() {
    return (
      <div id="slider">
        <h2 id="pedal">How much pedal pressure are you applying?</h2>
        <Slider
          value={this.state.pedalPressure}
          onChange={this.onSliderChange}
          onAfterChange={this.onAfterChange}
          min={0}
          max={2}
          marks={marks}
          step={1}
        />
        <h3 id="pedal">You are applying {pressureTypes[this.state.pedalPressure.toString()]} pressure!</h3>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PressureContainer)
