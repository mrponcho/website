import React from 'react';
import Link from 'next/link';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';

export default () => (
  <Paper>
    <Link href="/" prefetch>
      <Tab label="Projects" />
    </Link>
    <Link href="/social" prefetch>
      <Tab label="Social" />
    </Link>
    <Link href="/code" prefetch>
      <Tab label="Code" />
    </Link>
    <Link href="/about" prefetch>
      <Tab label="About" />
    </Link>
  </Paper>
);
