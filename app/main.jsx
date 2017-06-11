'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import AllSliders from './containers'

render (
  <Provider store={store}>
    <AllSliders />
  </Provider>,
  document.getElementById('main')
)
