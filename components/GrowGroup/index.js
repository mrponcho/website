import React from 'react';
import Grow from '@material-ui/core/Grow';

export default ({ children }) => children.map((child, i) => (
  <Grow key={i} timeout={(i + 1) * 1000} in>
    {child}
  </Grow>
));
