import React from 'react';
import styled from 'styled-components';
import FullScreenDialog from '../../components/FullScreenDialog';
import GithubIcon from '../../components/Icons/Github';
import ProfileCard from '../../components/ProfileCard';

export default function Github() {
  const A = styled.a`
    text-decoration: none;
  `;
  return (
    <FullScreenDialog
      title="Github"
      icon={<GithubIcon />}
      color="white"
      background="#24292e"
    >
      <A href="https://github.com/mrponcho">
        <ProfileCard
          headline="mrponcho"
          alt="Github Profile"
          src="/static/profile.jpg"
          color="white"
          background="#24292e"
        />
      </A>
    </FullScreenDialog>
  );
}
