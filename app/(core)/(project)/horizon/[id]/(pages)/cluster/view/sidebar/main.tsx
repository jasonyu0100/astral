import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx } from '@/(style)/data';
import React from 'react';
import { MapSidebarEntry } from './entry/main';

export function MapSidebar() {
  return (
    <GlassAreaContainer
      name={MapSidebar.name}
      sizeFx='max-w-[300px] min-w-[200px] w-1/4 h-full flex-shrink-0'
      className={`flex flex-col space-y-[1rem] p-[1rem]`}
      glassFx={glassFx['glass-5']}
    >
      <MapSidebarEntry>Marketing Group</MapSidebarEntry>
      <MapSidebarEntry>Sales Group</MapSidebarEntry>
      <MapSidebarEntry>Production Group</MapSidebarEntry>

    </GlassAreaContainer>
  );
}
