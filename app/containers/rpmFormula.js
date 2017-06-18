const setRpmInContainer = (pedalPressure, speed) => {
  // no pressure on pedal
  if (pedalPressure === 0) {
    return 0
  }

  // light pressure on pedal
  if (pedalPressure === 1) {
    // first gear
    if (speed > -1 && speed < 9) {
      return speed * 228 + 1000
    }

    // second gear
    if (speed > 8 && speed < 24) {
      return (speed - 9) * 133 + 1000
    }

    // third gear
    if (speed > 23 && speed < 45) {
      return (speed - 24) * 94 + 1000
    }

    if (speed > 44 && speed < 73)  {
      return (speed - 45) * 72 + 1000
    }

    else {
      return 7000
    }
  }

  // heavy pressure on pedal
  else {
    // first gear
    if (speed > -1 && speed < 31) {
      return speed * 228 + 1000
    }

    // second gear
    if (speed > 30 && speed < 53) {
      return (speed - 31) * 133 + 1000
    }

    // third gear
    if (speed > 52 && speed < 74) {
      return (speed - 53) * 94 + 1000
    }

    if (speed > 73 && speed < 97)  {
      return (speed - 74) * 72 + 1000
    }

    else {
      return 7000
    }
  }
}

export default setRpmInContainer
