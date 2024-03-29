import React from 'react';
import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx, containerFx } from '@/(design)/(fx)/data';
import { CreativeNetworkSidebarHorizons } from './horizons/main';
import { CreativeNetworkSidebarHeader } from './header/main';
import { CreativeNetworkSidebarHorizon } from './horizons/horizon/main';

export function CreativeNetworkSidebar() {
  return (
    <GlassAreaContainer
      name={CreativeNetworkSidebar.name}
      sizeFx='max-w-[500px] min-w-[250px] w-1/4 h-full'
      className={`${containerFx['col']} space-y-[1rem] px-[1rem]`}
      glassFx={glassFx['glass-r-10']}
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
