import React from 'react';
import styled from 'styled-components';
import FullScreenDialog from '../../../components/FullScreenDialog';
import Instagram from '../../../components/Icons/Instagram';
import ProfileCard from '../../../components/ProfileCard';

export default function Xbox() {
  const A = styled.a`
    text-decoration: none;
  `;
  return (
    <FullScreenDialog
      title="Instagram"
      icon={<Instagram />}
      color="white"
      background="linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)"
    >
      <A href="https://www.instagram.com/mrp0ncho/">
        <ProfileCard
          headline="mrp0ncho"
          alt="Instagram Profile"
          src="/static/profile.jpg"
        />
      </A>
    </FullScreenDialog>
  );
}
