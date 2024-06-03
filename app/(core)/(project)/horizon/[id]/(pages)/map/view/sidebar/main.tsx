import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx, borderFx, roundedFx } from '@/(style)/data';
import React from 'react';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { MapSidebarPoint } from './point/main';

export function MapSidebar() {
  return (
    <GlassAreaContainer
      name={MapSidebar.name}
      sizeFx='max-w-[360px] min-w-[240px] w-1/4 h-full flex-shrink-0'
      className={`flex flex-col space-y-[1rem] p-[1rem]`}
      glassFx={glassFx['glass-5']}
    >
      <MapSidebarPoint>Marketing Group</MapSidebarPoint>
      <MapSidebarPoint>Sales Group</MapSidebarPoint>
      <MapSidebarPoint>Production Group</MapSidebarPoint>

    </GlassAreaContainer>
  );
}
