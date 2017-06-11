'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import AllSliders from './containers'

render (
  <div>
    <h1>Shift My Gear!</h1>
    <Provider store={store}>
      <AllSliders />
    </Provider>
  </div>,
  document.getElementById('main')
)
