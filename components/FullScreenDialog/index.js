import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Close from '../Icons/Close';
import AppContainer from '../AppContainer';

function FullScreenDialog({
  background, children, icon, title,
}) {
  const Header = styled(AppBar)`
    &&& {
      position: relative;
      background: ${background};
    }
  `;
  const IconWrapper = styled.div`
    height: 35px;
    svg {
      height: 35px;
      margin-right: ${props => props.marginRight};
    }
  `;
  const Title = styled(Typography)`
    flex: 1;
  `;
  const Wrapper = styled.div`
    margin: 12px;
  `;
  function Transition(props) {
    return <Slide direction="up" {...props} />;
  }
  return (
    <div>
      <Dialog fullScreen open TransitionComponent={Transition}>
        <Header>
          <Toolbar>
            <IconWrapper marginRight="1rem">
              {icon}
            </IconWrapper>
            <Title variant="h6" color="inherit">
              {title}
            </Title>
            <Link href="/social" prefetch>
              <IconButton color="inherit" aria-label="Close">
                <IconWrapper>
                  <Close />
                </IconWrapper>
              </IconButton>
            </Link>
          </Toolbar>
        </Header>
        <Wrapper>
          <AppContainer>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                {children}
              </Grid>
            </Grid>
          </AppContainer>
        </Wrapper>
      </Dialog>
    </div>
  );
}

export default FullScreenDialog;
