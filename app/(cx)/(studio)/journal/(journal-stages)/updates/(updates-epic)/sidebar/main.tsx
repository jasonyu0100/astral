import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import { glassStyles, containerStyles } from '@/(design)/(styles)/data';
import React from 'react';
import { JournalUpdatesSidebarCreatives } from './creatives/main';
import { JouranlUpdatesSidebarCreative } from './creatives/creative/main';
import { JournalUpdatesSidebarHeader } from './header/main';

export function JournalUpdatesSidebar() {
  return (
    <GlassAreaContainer
      name={JournalUpdatesSidebar.name}
      size='max-w-[500px] min-w-[250px] w-1/4 h-full'
      className={`${containerStyles['col']} space-y-[1rem] px-[1rem]`}
      glass={glassStyles['glass-10']}
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
