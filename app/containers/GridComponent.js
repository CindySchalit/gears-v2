import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import PressureContainer from './PressureContainer'
import SpeedContainer from './SpeedContainer'
import RpmContainer from './RpmContainer'

export default class GridComponent extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <PressureContainer />
            </Col>
            <Col xs={6} md={4}>
              <SpeedContainer />
            </Col>
            <Col xsHidden md={4}>
              <RpmContainer />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
