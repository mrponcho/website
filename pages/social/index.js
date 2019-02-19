import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import Github from '../../components/Icons/Github';
import Instagram from '../../components/Icons/Instagram';
import Xing from '../../components/Icons/Xing';
import GrowGroup from '../../components/GrowGroup';
import CodeSandbox from '../../components/Icons/CodeSandbox';
import StyledPaper from '../../components/StyledPaper';
import RocketLeague from '../../components/Icons/RocketLeague';
import Xbox from '../../components/Icons/Xbox';

const IconWrapper = styled.div`
  svg {
    height: 50px;
  }
`;

export default () => (
  <GrowGroup>
    <Grid item xs={6} sm={4}>
      <StyledPaper background="#007575" color="white">
        <IconWrapper>
          <Xing />
        </IconWrapper>
      </StyledPaper>
    </Grid>
    <Grid item xs={6} sm={4}>
      <StyledPaper
        background="linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)"
        color="white"
      >
        <IconWrapper>
          <Instagram />
        </IconWrapper>
      </StyledPaper>
    </Grid>
    <Grid item xs={6} sm={4}>
      <StyledPaper background="#24292e" color="white">
        <IconWrapper>
          <Github />
        </IconWrapper>
      </StyledPaper>
    </Grid>
    <Grid item xs={6} sm={4}>
      <StyledPaper background="rgba(0,0,0,.8)" color="white">
        <IconWrapper>
          <CodeSandbox />
        </IconWrapper>
      </StyledPaper>
    </Grid>
    <Grid item xs={6} sm={4}>
      <Link href="/social/xbox">
        <StyledPaper background="#0e7a0d" color="white">
          <IconWrapper>
            <Xbox />
          </IconWrapper>
        </StyledPaper>
      </Link>
    </Grid>
    <Grid item xs={6} sm={4}>
      <StyledPaper background="#002f87" color="white">
        <IconWrapper>
          <RocketLeague />
        </IconWrapper>
      </StyledPaper>
    </Grid>
  </GrowGroup>
);
