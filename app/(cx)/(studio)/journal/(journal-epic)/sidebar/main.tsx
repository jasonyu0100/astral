import { Glass } from '@/(components)/layer/main';
import { backgroundStyles, containerStyles } from '@/(components)/styles/data';
import React, { useContext } from 'react';
import { FeedSidebarColumn } from './column/main';
import { FeedSidebarEntry } from './column/section/entry/main';
import { FeedSidebarSection } from './column/section/main';
import { FeedJournalContext } from '../../(journal-stages)/feed/page';
import { FeedSidebarHeader } from './header/main';

export function FeedSidebar() {
  return (
    <Glass
      displayName={FeedSidebar.name}
      sizeStyle='max-w-[500px] min-w-[250px] w-1/4 h-full'
      className={`${containerStyles['col']} space-y-[1rem] px-[1rem]`}
      backgroundStyle={backgroundStyles['glass-10']}
    >
      <FeedSidebarHeader />
      <FeedSidebarColumn>
        <FeedSidebarSection />
      </FeedSidebarColumn>
    </Glass>
  );
}
