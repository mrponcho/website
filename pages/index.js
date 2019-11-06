import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import purple from '@material-ui/core/colors/blueGrey';
import Header from '../components/Header';
import Github from '../components/Icons/Github';
import Instagram from '../components/Icons/Instagram';
import Xing from '../components/Icons/Xing';
import GrowGroup from '../components/GrowGroup';
import CodeSandbox from '../components/Icons/CodeSandbox';
import StyledPaper from '../components/StyledPaper';
import RocketLeague from '../components/Icons/RocketLeague';
import Xbox from '../components/Icons/Xbox';
import Info from '../components/Icons/Info';

// change to material styled
const IconWrapper = styled.div`
  svg {
    height: 50px;
  }
`;

const GridItem = ({
  href, background, Icon, ...props
}) => (
  <Grid {...props} item xs={6} sm={4}>
    <Link href={href} prefetch>
      <StyledPaper background={background} color="white">
        <IconWrapper>
          <Icon />
        </IconWrapper>
      </StyledPaper>
    </Link>
  </Grid>
);

export default () => (
  <>
    <Grid item xs={12}>
      <Header />
    </Grid>
    <GrowGroup>
      <GridItem href="/xing" background="#007575" Icon={Xing} />
      <GridItem href="/instagram" background="linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)" Icon={Instagram} />
      <GridItem href="/github" background="#24292e" Icon={Github} />
      <GridItem href="/codesandbox" background="rgba(0,0,0,.8)" Icon={CodeSandbox} />
      <GridItem href="/xbox" background="#0e7a0d" Icon={Xbox} />
      <GridItem href="/rocketleague" background="#002f87" Icon={RocketLeague} />
      <GridItem href="/about" background={purple[600]} Icon={Info} />
    </GrowGroup>
  </>
);
