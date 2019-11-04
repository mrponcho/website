import React from 'react';
import ProfileCard from '../ProfileCard';

export default function Header() {
  return (
    <ProfileCard
      src="/static/profile.jpg"
      alt="Johannes Barth"
      headline="Johannes Barth"
      subline="'95 | Mannheim | Life is beautiful"
      description="Developer"
    />
  );
}
