import React from 'react';
import styled from 'styled-components';
import FullScreenDialog from '../../../components/FullScreenDialog';
import CodeSandboxIcon from '../../../components/Icons/CodeSandbox';
import ProfileCard from '../../../components/ProfileCard';

export default function CodeSandbox() {
  const A = styled.a`
    text-decoration: none;
  `;
  return (
    <FullScreenDialog
      title="Codesandbox"
      icon={<CodeSandboxIcon />}
      color="white"
      background="rgba(0,0,0,.8)"
    >
      <A href="https://codesandbox.io/u/mrponcho">
        <ProfileCard
          headline="mrponcho"
          alt="Codesandbox Profile"
          src="/static/profile.jpg"
          color="white"
          background="rgba(0,0,0,.8)"
        />
      </A>
    </FullScreenDialog>
  );
}
