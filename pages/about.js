/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';

function About() {
  return (
    <Grid item xs={12}>
      <Typography variant="h4" gutterBottom>
        {'It\'s something'}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {'Powered by React, Material UI, Styled Components and Next Js'}
      </Typography>
      <Typography gutterBottom>
        <Link href="/">
          <a>
            {'Go to the main page'}
          </a>
        </Link>
      </Typography>
      <Button variant="contained" color="primary">
        {'Nothing will happen. Trust me!'}
      </Button>
    </Grid>
  );
}

export default About;
