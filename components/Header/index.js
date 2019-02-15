/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const CenterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.height || ''};
`;

const StyledPaper = styled(Paper)`
  padding: 18px;
`;

const Image = styled(Avatar)`
  &&& {
    height: 90px;
    width: 90px;
    margin: 10px;
  }
`;

const Header = () => (
  <StyledPaper>
    <Grid container>
      <Grid item xs={3}>
        <CenterContent>
          <Image
            src="/static/profile.jpg"
            alt="Johannes Barth"
          />
        </CenterContent>
      </Grid>
      <Grid item xs={9}>
        <CenterContent height="110px">
          <div>
            <Typography variant="h5" component="h1">
              Johannes Barth
            </Typography>
            <Typography color="textSecondary">
              '95 | Mannheim | Life is beautiful
            </Typography>
            <Typography color="textSecondary">Web-Developer</Typography>
          </div>
        </CenterContent>
      </Grid>
    </Grid>
  </StyledPaper>
);

export default React.memo(Header);
