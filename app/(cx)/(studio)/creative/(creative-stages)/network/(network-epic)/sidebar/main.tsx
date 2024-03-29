import React from 'react';
import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import { glassStyles, containerStyles } from '@/(design)/(styles)/data';
import { JournalNetworkSidebarColumn } from './column/main';
import { JournalNetworkSidebarSection } from './column/section/main';
import { JournalNetworkSidebarHeader } from './header/main';

export function CreativeNetworkSidebar() {
  return (
    <GlassAreaContainer
      displayName={CreativeNetworkSidebar.name}
      sizeStyle='max-w-[500px] min-w-[250px] w-1/4 h-full'
      className={`${containerStyles['col']} space-y-[1rem] px-[1rem]`}
      glassStyle={glassStyles['glass-r-10']}
    >
      <JournalNetworkSidebarHeader />
      <JournalNetworkSidebarColumn>
        <JournalNetworkSidebarSection />
      </JournalNetworkSidebarColumn>
    </GlassAreaContainer>
  );
}
