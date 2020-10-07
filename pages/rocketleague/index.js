import React from 'react';
import styled from 'styled-components';
import FullScreenDialog from '../../components/FullScreenDialog';
import RocketLeagueIcon from '../../components/Icons/RocketLeague';
import ProfileCard from '../../components/ProfileCard';

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
      <A href="https://rocketleague.tracker.network/rocket-league/profile/steam/76561198061863602/overview">
        <ProfileCard
          headline="MrPoncho"
          alt="RocketLeague Profile"
          src="/static/rl.jpg"
          color="white"
          background="#002f87"
        />
      </A>
    </FullScreenDialog>
  );
}
