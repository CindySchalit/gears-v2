'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import SpeedSlider from './components/SpeedSlider'

render (
  <Provider store={store}>
    <SpeedSlider id="container"/>
  </Provider>,
  document.getElementById('main')
)
