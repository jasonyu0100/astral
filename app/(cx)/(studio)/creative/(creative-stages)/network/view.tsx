'use client';
import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import {
  glassStyles,
  containerStyles,
  roundedStyles,
} from '@/(design)/(styles)/data';
import { CreativeNetworkMain } from './(network-epic)/main';
import { CreativeNetworkSidebar } from './(network-epic)/sidebar/main';

export function CreativeNetworkView() {
  return (
    <GlassAreaContainer
      displayName={CreativeNetworkView.name}
      className={`flex flex-row`}
      glassStyle={glassStyles['glass-5']}
      sizeStyle='flex-grow h-full'
      roundedStyle={roundedStyles['rounded-container']}
    >
      <GlassAreaContainer
        displayName={CreativeNetworkView.name}
        className={`flex flex-row`}
        sizeStyle='flex-grow h-full'
      >
        <CreativeNetworkMain />
      </GlassAreaContainer>
      <CreativeNetworkSidebar />
    </GlassAreaContainer>
  );
}
