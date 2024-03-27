'use client';
import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import {
  glassStyles,
  containerStyles,
  roundedStyles,
} from '@/(design)/(styles)/data';
import { ArtistCollection } from '../../(creative-epic)/main';
import { CreativeNetworkSidebar } from './sidebar/main';

export function ArtistsNetworkView() {
  return (
    <GlassAreaContainer
      displayName={ArtistsNetworkView.name}
      className={`flex flex-row`}
      glassStyle={glassStyles['glass-5']}
      sizeStyle='flex-grow h-full'
      roundedStyle={roundedStyles['rounded-container']}
    >
      <GlassAreaContainer
        displayName={ArtistsNetworkView.name}
        className={`flex flex-row`}
        sizeStyle='flex-grow h-full'
      >
        <ArtistCollection />
      </GlassAreaContainer>
      <CreativeNetworkSidebar />
    </GlassAreaContainer>
  );
}
