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
      name={CreativeNetworkView.name}
      className={`flex flex-row`}
      glass={glassStyles['glass-5']}
      size='flex-grow h-full'
      rounded={roundedStyles['rounded-container']}
    >
      <GlassAreaContainer
        name={CreativeNetworkView.name}
        className={`flex flex-row`}
        size='flex-grow h-full'
      >
        <CreativeNetworkMain />
      </GlassAreaContainer>
      <CreativeNetworkSidebar />
    </GlassAreaContainer>
  );
}
