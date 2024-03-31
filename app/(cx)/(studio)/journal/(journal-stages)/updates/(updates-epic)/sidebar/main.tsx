import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx, containerFx } from '@/(design)/(fx)/data';
import React from 'react';
import { JournalUpdatesSidebarCreatives } from './creatives/main';
import { JouranlUpdatesSidebarCreative } from './creatives/creative/main';
import { JournalUpdatesSidebarHeader } from './header/main';

export function JournalUpdatesSidebar() {
  return (
    <GlassAreaContainer
      name={JournalUpdatesSidebar.name}
      sizeFx='max-w-[500px] min-w-[250px] w-1/4 h-full'
      className={`${containerFx['col']} space-y-[1rem] px-[1rem]`}
      glassFx={glassFx['glass-5']}
    >
      <JournalUpdatesSidebarHeader />
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
