import React from 'react';
import Link from 'next/link';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';

function LinkTab({
  href, label,
}) {
  return (
    <Link href={href} prefetch>
      <Tab component="a" href={href} label={label} />
    </Link>
  );
}

export default function Navigation() {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const { location: { pathname } } = window;
    switch (pathname) {
      default:
        setIndex(index);
        break;
      case '/':
        setIndex(0);
        break;
      case '/social':
        setIndex(1);
        break;
      case '/code':
        setIndex(2);
        break;
      case '/about':
        setIndex(3);
        break;
    }
  });
  function handleChange(e, newIndex) {
    setIndex(newIndex);
  }
  return (
    <Paper>
      <Tabs
        value={index}
        onChange={handleChange}
        indicatorColor="primary"
        centered
      >
        <LinkTab href="/" label="Projects" />
        <LinkTab href="/social" label="Social" />
        <LinkTab href="/code" label="Code" />
        <LinkTab href="/about" label="About" />
      </Tabs>
    </Paper>
  );
}
