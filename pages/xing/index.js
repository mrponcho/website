import React from 'react';
import styled from 'styled-components';
import FullScreenDialog from '../../components/FullScreenDialog';
import XingIcon from '../../components/Icons/Xing';
import ProfileCard from '../../components/ProfileCard';

export default function Xing() {
  const A = styled.a`
    text-decoration: none;
  `;
  return (
    <FullScreenDialog
      title="Xing"
      icon={<XingIcon />}
      color="white"
      background="#007575"
    >
      <A href="https://www.xing.com/profile/Johannes_Barth10">
        <ProfileCard
          headline="Johannes Barth"
          subline="Angestellt, Softwareentwickler, DER Touristik Online GmbH"
          description="Mannheim, Deutschland"
          alt="Xing Profile"
          src="/static/xing.jpg"
        />
      </A>
    </FullScreenDialog>
  );
}
