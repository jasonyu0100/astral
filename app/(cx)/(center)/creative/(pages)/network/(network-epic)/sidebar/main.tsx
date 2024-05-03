import React from 'react';
import { GlassAreaContainer } from '@/(lib)/(glass)/area/main';
import { glassFx, containerFx } from '@/(fx)/data';
import { CreativeNetworkSidebarHorizons } from './horizons/main';
import { CreativeNetworkSidebarHorizon } from './horizons/horizon/main';

export function CreativeNetworkSidebar() {
  return (
    <GlassAreaContainer
      name={CreativeNetworkSidebar.name}
      sizeFx='max-w-[500px] min-w-[250px] w-1/4 h-full'
      className={`${containerFx['col']} space-y-[1rem] p-[1rem]`}
      glassFx={glassFx['glass-5']}
    >
      <CreativeNetworkSidebarHorizons>
        <CreativeNetworkSidebarHorizon />
        <CreativeNetworkSidebarHorizon />
        <CreativeNetworkSidebarHorizon />
        <CreativeNetworkSidebarHorizon />
      </CreativeNetworkSidebarHorizons>
    </GlassAreaContainer>
  );
}
