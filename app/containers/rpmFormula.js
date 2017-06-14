const setRpmInContainer = (pedalPressure, speed) => {
  let rpm

  // no pressure on pedal
  if (pedalPressure === 0) {
    return 0
  }

  // light pressure on pedal
  if (pedalPressure === 1) {
    if (speed < 10) {
      rpm = speed * 228
    }

    if (speed < 25) {
      rpm = speed * 133
    }

    if (speed < 46) {
      rpm = speed * 94
    }

    if (speed < 74)  {
      rpm = speed * 72
    }

    else {
      rpm = 7000
    }
  }

  // heavy pressure on pedal
  if (pedalPressure === 2) {
    if (speed < 31) {
      rpm = speed * 228
    }

    if (speed < 53) {
      rpm = speed * 133
    }

    if (speed < 74) {
      rpm = speed * 94
    }

    if (speed < 97)  {
      rpm = speed * 72
    }

    else {
      rpm = 7000
    }
  }

  return rpm + 1000
}

export default setRpmInContainer
