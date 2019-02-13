import React from 'react';
import Link from 'next/link';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';

export default () => (
  <Paper>
    <Link href="/">
      <Tab label="Projects" />
    </Link>
    <Link href="/social">
      <Tab label="Social" />
    </Link>
    <Link href="/code">
      <Tab label="Code" />
    </Link>
    <Link href="/about">
      <Tab label="About" />
    </Link>
  </Paper>
);
