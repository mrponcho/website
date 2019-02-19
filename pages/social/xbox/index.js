import React from 'react';
import styled from 'styled-components';
import FullScreenDialog from '../../../components/FullScreenDialog';
import XboxIcon from '../../../components/Icons/Xbox';
import ProfileCard from '../../../components/ProfileCard';

export default function Xbox() {
  const A = styled.a`
    text-decoration: none;
  `;
  return (
    <FullScreenDialog title="Xbox" icon={<XboxIcon />} background="#0e7a0d">
      <A href="https://account.xbox.com/en-us/profile?gamertag=MrP0ncho">
        <ProfileCard
          background="#0e7a0d"
          color="white"
          headline="MrP0NCHO"
          alt="Xbox Profile"
          src="/static/xbox_profile.jpg"
        />
      </A>
    </FullScreenDialog>
  );
}
