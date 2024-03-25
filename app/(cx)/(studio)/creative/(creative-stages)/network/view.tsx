'use client';
import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import {
  glassStyles,
  containerStyles,
  roundedStyles,
} from '@/(design)/(styles)/data';
import { ArtistCollection } from '../../(creative-epic)/main';
import { ArtistNetworkSidebar } from './sidebar/main';

export function ArtistsNetworkView() {
  return (
    <GlassContainer
      displayName={ArtistsNetworkView.name}
      className={`flex flex-row`}
      glassStyle={glassStyles['glass-5']}
      sizeStyle='flex-grow h-full'
      roundedStyle={roundedStyles['rounded-container']}
    >
      <GlassContainer
        displayName={ArtistsNetworkView.name}
        className={`flex flex-row`}
        sizeStyle='flex-grow h-full'
      >
        <ArtistCollection />
      </GlassContainer>
      <ArtistNetworkSidebar />
    </GlassContainer>
  );
}
