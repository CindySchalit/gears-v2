import React, { Component } from 'react'
import { connect } from 'react-redux'
import Slider from 'rc-slider'
import { setPedalPressure } from '../action-creators/pedalPressure'

const style = {width: 800, margin: 50};

const marks = {
  0: '0 mph',
  35: '35 mph',
  60: '60 mph',
  85: '85 mph',
  110: '110 mph',
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

class TestContainer extends Component {
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
    <div style={style}>
      <Slider
        value={this.state.pedalPressure}
        onChange={this.onSliderChange}
        onAfterChange={this.onAfterChange}
        min={0}
        max={110}
        marks={marks}
        step={5}
      />
    </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestContainer)
