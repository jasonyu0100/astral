'use client';
import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { backgroundStyles, containerStyles } from '@/(design)/(styles)/data';
import { JournalNetworkSidebar } from './sidebar/main';

export function ArtistsNetworkView() {
  return (
    <GlassContainer
      displayName={ArtistsNetworkView.name}
      className={`${containerStyles.row}`}
      glassStyle={backgroundStyles['glass-5']}
      sizeStyle='flex-grow h-full'
    >
      <GlassContainer
        className={`${containerStyles.row}`}
        sizeStyle='flex-grow h-full'
      >
      </GlassContainer>
      <JournalNetworkSidebar />
    </GlassContainer>
  );
}
