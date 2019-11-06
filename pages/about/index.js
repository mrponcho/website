import React from 'react';
import FullScreenDialog from '../../components/FullScreenDialog';
import InfoIcon from '../../components/Icons/Info';

export default function About() {
  return (
    <FullScreenDialog
      title="About"
      icon={<InfoIcon />}
      color="white"
      background="#007575"
    >
      
    </FullScreenDialog>
  );
}