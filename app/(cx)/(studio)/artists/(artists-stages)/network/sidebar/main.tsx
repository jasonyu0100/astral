import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { backgroundStyles, containerStyles } from '@/(design)/(styles)/data';
import React from 'react';
import { JournalNetworkSidebarColumn } from './column/main';
import { JournalNetworkSidebarSection } from './column/section/main';
import { JournalNetworkSidebarHeader } from './header/main';

export function JournalNetworkSidebar() {
  return (
    <GlassContainer
      displayName={JournalNetworkSidebar.name}
      sizeStyle='max-w-[500px] min-w-[250px] w-1/4 h-full'
      className={`${containerStyles['col']} space-y-[1rem] px-[1rem]`}
      glassStyle={backgroundStyles['glass-10']}
    >
      <JournalNetworkSidebarHeader />
      <JournalNetworkSidebarColumn>
        <JournalNetworkSidebarSection />
      </JournalNetworkSidebarColumn>
    </GlassContainer>
  );
}
