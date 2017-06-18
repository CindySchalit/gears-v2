const calculateGear = (pedalPressure, speed) => {
  if (!pedalPressure) {
    return 'First'
  }

  if (pedalPressure === 1) {
    if (speed < 9) {
      return 'First'
    }

    if (speed > 8 && speed < 24) {
      return 'Second'
    }

    if (speed > 23 && speed < 45) {
      return 'Third'
    }

    if (speed > 44 && speed < 73) {
      return 'Fourth'
    }

    return 'Fifth'
  }
}

export default calculateGear
