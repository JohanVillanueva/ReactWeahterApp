import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { Grid, Col, Row } from 'react-flexbox-grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import LocationListContainer from './containers/LocationListContainer';
import './App.css';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

const cities = [
  "Lima, pe",
  "Trujillo, pe",
  "Buenos Aires, ar",
  "Washington, us",
  "Madrid, es",
]


class App extends Component {

  render() {
    return (
        <Grid >
          <Row>
            <Col xs={12} md={12} lg={12}>
              <AppBar position="static">
                  <Toolbar>
                    <IconButton color="inherit" aria-label="Menu">
                    </IconButton>
                     <Typography variant="inherit">
                        Weahter App
                     </Typography>
                  </Toolbar>
              </AppBar>
            </Col>
          </Row>  
          <Row className="bodyContainer">
            <Col xs={12} md={6}>
              <LocationListContainer cities={cities}/>
            </Col>
            <Col xs={12} md={6}>
              <Paper>
                <div className="details">
                  <ForecastExtendedContainer/>  
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
    );
  }
}

export default App;
