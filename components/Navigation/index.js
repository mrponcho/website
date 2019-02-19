import React from 'react';
import Link from 'next/link';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';

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
  function LinkTab({
    children, href, prefetch, ...rest
  }) {
    return (
      <Link href={href} prefetch={prefetch}>
        {React.cloneElement(children, rest)}
      </Link>
    );
  }
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
        <LinkTab href="/" prefetch>
          <Tab label="Projects" />
        </LinkTab>
        <LinkTab href="/social" prefetch>
          <Tab label="Social" />
        </LinkTab>
        <LinkTab href="/code" prefetch>
          <Tab label="Code" />
        </LinkTab>
        <LinkTab href="/about" prefetch>
          <Tab label="About" />
        </LinkTab>
      </Tabs>
    </Paper>
  );
}
