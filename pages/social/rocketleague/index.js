import React from 'react';
import styled from 'styled-components';
import FullScreenDialog from '../../../components/FullScreenDialog';
import RocketLeagueIcon from '../../../components/Icons/RocketLeague';
import ProfileCard from '../../../components/ProfileCard';

export default function RocketLeague() {
  const A = styled.a`
    text-decoration: none;
  `;
  return (
    <FullScreenDialog
      title="Rocket League"
      icon={<RocketLeagueIcon />}
      color="white"
      background="#002f87"
    >
      <A href="https://codesandbox.io/u/mrponcho">
        <ProfileCard
          headline="mrponcho"
          alt="RocketLeague Profile"
          src="/static/profile.jpg"
          color="white"
          background="#002f87"
        />
      </A>
    </FullScreenDialog>
  );
}
