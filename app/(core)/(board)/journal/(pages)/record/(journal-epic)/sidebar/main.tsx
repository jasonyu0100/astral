import React from 'react';
import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx, containerFx } from '@/(style)/data';
import { JournalSidebarPoint } from './point/main';

export function JournalSidebar() {
  return (
    <GlassAreaContainer
      name={JournalSidebar.name}
      sizeFx='max-w-[360px] min-w-[240px] w-1/4 h-full'
      className={`${containerFx['col']} space-y-[1rem] p-[1rem]`}
      glassFx={glassFx['glass-5']}
    >
      <JournalSidebarPoint/>
      <JournalSidebarPoint/>
      <JournalSidebarPoint/>
      <JournalSidebarPoint/>
      <JournalSidebarPoint/>
    </GlassAreaContainer>
  );
}
