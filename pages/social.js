import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Github from '../components/Icons/Github';
import Instagram from '../components/Icons/Instagram';
import Xing from '../components/Icons/Xing';
import GrowGroup from '../components/GrowGroup';
import CodeSandbox from '../components/Icons/CodeSandbox';
import Paper from '../components/Paper';
import RocketLeague from '../components/Icons/RocketLeague';
import Xbox from '../components/Icons/Xbox';

const IconWrapper = styled.div`
  svg {
    height: 50px;
  }
`;

export default () => (
  <GrowGroup>
    <Grid item xs={6} sm={4}>
      <Paper background="#007575" color="white">
        <IconWrapper>
          <Xing />
        </IconWrapper>
      </Paper>
    </Grid>
    <Grid item xs={6} sm={4}>
      <Paper
        background="linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)"
        color="white"
      >
        <IconWrapper>
          <Instagram />
        </IconWrapper>
      </Paper>
    </Grid>
    <Grid item xs={6} sm={4}>
      <Paper background="#24292e" color="white">
        <IconWrapper>
          <Github />
        </IconWrapper>
      </Paper>
    </Grid>
    <Grid item xs={6} sm={4}>
      <Paper background="rgba(0,0,0,.8)" color="white">
        <IconWrapper>
          <CodeSandbox />
        </IconWrapper>
      </Paper>
    </Grid>
    <Grid item xs={6} sm={4}>
      <Paper background="#0e7a0d" color="white">
        <IconWrapper>
          <Xbox />
        </IconWrapper>
      </Paper>
    </Grid>
    <Grid item xs={6} sm={4}>
      <Paper background="#002f87" color="white">
        <IconWrapper>
          <RocketLeague />
        </IconWrapper>
      </Paper>
    </Grid>
  </GrowGroup>
);
