import React from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Zoom from '@material-ui/core/Zoom';
import Close from '../Icons/Close';
import AppContainer from '../AppContainer';

function FullScreenDialog({
  background, children, icon, title,
}) {
  const [open, setOpen] = React.useState(true);
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
  function handleClose() {
    setOpen(false);
    setTimeout(() => Router.push('/social'), 200);
  }
  return (
    <div>
      <Dialog fullScreen open={open} TransitionComponent={Zoom}>
        <Header>
          <Toolbar>
            <IconWrapper marginRight="1rem">
              {icon}
            </IconWrapper>
            <Title variant="h6" color="inherit">
              {title}
            </Title>
            <IconButton onClick={handleClose} color="inherit" aria-label="Close">
              <IconWrapper>
                <Close />
              </IconWrapper>
            </IconButton>
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
