import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppContainer from '../components/AppContainer';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Projects from './Projects';
import Social from './Social/social';
import Code from './code/code';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000',
    },
  },
});

const App = () => {
  const [tabValue, setTabValue] = useState(0);
  return (
    <MuiThemeProvider theme={theme}>
      <AppContainer>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12}>
            <Navigation
              value={tabValue}
              onChange={(event, newTabValue) => setTabValue(newTabValue)}
            />
          </Grid>
          {/** insert Routing */}
          {tabValue === 0 && <Projects />}
          {tabValue === 1 && <Social />}
          {tabValue === 2 && <Code />}
        </Grid>
      </AppContainer>
    </MuiThemeProvider>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
