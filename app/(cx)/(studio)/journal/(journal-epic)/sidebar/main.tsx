import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { backgroundStyles, containerStyles } from '@/(design)/(styles)/data';
import React, { useContext } from 'react';
import { FeedSidebarColumn } from './column/main';
import { FeedSidebarEntry } from './column/section/entry/main';
import { FeedSidebarSection } from './column/section/main';
import { FeedJournalContext } from '../../(journal-stages)/updates/page';
import { FeedSidebarHeader } from './header/main';

export function FeedSidebar() {
  return (
    <GlassContainer
      displayName={FeedSidebar.name}
      sizeStyle='max-w-[500px] min-w-[250px] w-1/4 h-full'
      className={`${containerStyles['col']} space-y-[1rem] px-[1rem]`}
      glassStyle={backgroundStyles['glass-10']}
    >
      <FeedSidebarHeader />
      <FeedSidebarColumn>
        <FeedSidebarSection />
      </FeedSidebarColumn>
    </GlassContainer>
  );
}
