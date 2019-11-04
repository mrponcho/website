import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import FullScreenDialog from '../../components/FullScreenDialog';
import InstagramIcon from '../../components/Icons/Instagram';
import ProfileCard from '../../components/ProfileCard';
import TitlebarGridList from '../../components/TitlebarGridList';


export default function Instagram() {
  const A = styled.a`
    text-decoration: none;
  `;
  return (
    <FullScreenDialog
      title="Instagram"
      icon={<InstagramIcon />}
      color="white"
      background="linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)"
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <A href="https://www.instagram.com/mrp0ncho/">
            <ProfileCard
              headline="mrp0ncho"
              alt="Instagram Profile"
              src="/static/profile_insta.jpg"
            />
          </A>
        </Grid>
        <Grid item xs={12}>
          <TitlebarGridList />
        </Grid>
      </Grid>
    </FullScreenDialog>
  );
}
