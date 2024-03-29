import React from 'react';
import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import { glassStyles, containerStyles } from '@/(design)/(styles)/data';
import { CreativeNetworkSidebarHorizons } from './horizons/main';
import { CreativeNetworkSidebarHeader } from './header/main';
import { CreativeNetworkSidebarHorizon } from './horizons/horizon/main';

export function CreativeNetworkSidebar() {
  return (
    <GlassAreaContainer
      name={CreativeNetworkSidebar.name}
      size='max-w-[500px] min-w-[250px] w-1/4 h-full'
      className={`${containerStyles['col']} space-y-[1rem] px-[1rem]`}
      glass={glassStyles['glass-r-10']}
    >
      <CreativeNetworkSidebarHeader />
      <CreativeNetworkSidebarHorizons>
        <CreativeNetworkSidebarHorizon />
        <CreativeNetworkSidebarHorizon />
        <CreativeNetworkSidebarHorizon />
        <CreativeNetworkSidebarHorizon />
      </CreativeNetworkSidebarHorizons>
    </GlassAreaContainer>
  );
}
