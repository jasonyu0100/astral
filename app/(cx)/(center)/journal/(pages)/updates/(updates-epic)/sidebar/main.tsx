import { GlassAreaContainer } from '@/(lib)/(glass)/area/main';
import { glassFx, containerFx } from '@/(fx)/data';
import React from 'react';
import { JournalUpdatesSidebarCreatives } from './creatives/main';
import { JouranlUpdatesSidebarCreative } from './creatives/creative/main';

export function UpdatesSidebar() {
  return (
    <GlassAreaContainer
      name={UpdatesSidebar.name}
      sizeFx='max-w-[500px] min-w-[250px] w-1/4 h-full'
      className={`${containerFx['col']} space-y-[1rem] p-[1rem]`}
      glassFx={glassFx['glass-5']}
    >
      <JournalUpdatesSidebarCreatives>
        <JouranlUpdatesSidebarCreative />
        <JouranlUpdatesSidebarCreative />
        <JouranlUpdatesSidebarCreative />
        <JouranlUpdatesSidebarCreative />
        <JouranlUpdatesSidebarCreative />
        <JouranlUpdatesSidebarCreative />
        <JouranlUpdatesSidebarCreative />
        <JouranlUpdatesSidebarCreative />
        <JouranlUpdatesSidebarCreative />
      </JournalUpdatesSidebarCreatives>
    </GlassAreaContainer>
  );
}
