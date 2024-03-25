import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { glassStyles, containerStyles } from '@/(design)/(styles)/data';
import React from 'react';
import { FeedSidebarColumn } from './column/main';
import { FeedSidebarSection } from './column/section/main';
import { FeedSidebarHeader } from './header/main';

export function FeedSidebar() {
  return (
    <GlassContainer
      displayName={FeedSidebar.name}
      sizeStyle='max-w-[500px] min-w-[250px] w-1/4 h-full'
      className={`${containerStyles['col']} space-y-[1rem] px-[1rem]`}
      glassStyle={glassStyles['glass-10']}
    >
      <FeedSidebarHeader />
      <FeedSidebarColumn>
        <FeedSidebarSection />
        <FeedSidebarSection />
        <FeedSidebarSection />
        <FeedSidebarSection />
        <FeedSidebarSection />
        <FeedSidebarSection />
        <FeedSidebarSection />
        <FeedSidebarSection />
        <FeedSidebarSection />
      </FeedSidebarColumn>
    </GlassContainer>
  );
}
