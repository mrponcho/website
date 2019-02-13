import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import GrowGroup from '../components/GrowGroup';
import Paper from '../components/Paper';
import Meiers from '../components/Icons/Meiers';

const Image = styled.img`
  height: 70px;
`;

const IconWrapper = styled.div`
  svg {
    height: 70px;
  }
`;

export default () => (
  <GrowGroup>
    <Grid item xs={6}>
      <Paper component="a">
        <Image
          alt="Dertour"
          src="https://www.designtagebuch.de/wp-content/uploads/mediathek//2016/11/der-tour_logo-700x431.png"
        />
      </Paper>
    </Grid>
    <Grid item xs={6}>
      <Paper background="linear-gradient(180deg,#002d6c,#002252)" color="white">
        <IconWrapper>
          <Meiers />
        </IconWrapper>
      </Paper>
    </Grid>
  </GrowGroup>
);
