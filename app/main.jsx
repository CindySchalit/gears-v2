'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import SpeedSliderContainer from './containers/SpeedSliderContainer'

render (
  <Provider store={store}>
    <SpeedSliderContainer />
  </Provider>,
  document.getElementById('main')
)
