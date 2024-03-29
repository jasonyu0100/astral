import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import { glassStyles, containerStyles } from '@/(design)/(styles)/data';
import React from 'react';
import { UpdatesSidebarColumn } from './column/main';
import { UpdatesSidebarSection } from './column/section/main';
import { UpdatesSidebarHeader } from './header/main';

export function UpdatesSidebar() {
  return (
    <GlassAreaContainer
      name={UpdatesSidebar.name}
      size='max-w-[500px] min-w-[250px] w-1/4 h-full'
      className={`${containerStyles['col']} space-y-[1rem] px-[1rem]`}
      glass={glassStyles['glass-10']}
    >
      <UpdatesSidebarHeader />
      <UpdatesSidebarColumn>
        <UpdatesSidebarSection />
        <UpdatesSidebarSection />
        <UpdatesSidebarSection />
        <UpdatesSidebarSection />
        <UpdatesSidebarSection />
        <UpdatesSidebarSection />
        <UpdatesSidebarSection />
        <UpdatesSidebarSection />
        <UpdatesSidebarSection />
      </UpdatesSidebarColumn>
    </GlassAreaContainer>
  );
}
