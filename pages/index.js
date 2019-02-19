import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import GrowGroup from '../components/GrowGroup';
import StyledPaper from '../components/StyledPaper';
import Meiers from '../components/Icons/Meiers';
import Dertour from '../components/Icons/Dertour';

const IconWrapper = styled.div`
  svg {
    height: 35px;
  }

  @media only screen and (min-width: 550px ) {
    svg {
      height: 70px;
    }
  }
`;

export default () => (
  <GrowGroup>
    <Grid item xs={6}>
      <StyledPaper href="/social">
        <IconWrapper>
          <Dertour />
        </IconWrapper>
      </StyledPaper>
    </Grid>
    <Grid item xs={6}>
      <StyledPaper background="linear-gradient(180deg,#002d6c,#002252)" color="white">
        <IconWrapper>
          <Meiers />
        </IconWrapper>
      </StyledPaper>
    </Grid>
  </GrowGroup>
);
