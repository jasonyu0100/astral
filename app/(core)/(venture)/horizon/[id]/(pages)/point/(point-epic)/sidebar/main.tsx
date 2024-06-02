import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx, containerFx } from '@/(style)/data';
import React from 'react';
import { PointSidebarPoint } from './point/main';

export function PointSidebar() {
  return (
    <GlassAreaContainer
      name={PointSidebar.name}
      sizeFx='max-w-[360px] min-w-[240px] w-1/4 h-full flex-shrink-0'
      className={`${containerFx['col']} space-y-[1rem] p-[1rem]`}
      glassFx={glassFx['glass-5']}
    >
      <PointSidebarPoint/>
      <PointSidebarPoint/>
      <PointSidebarPoint/>
      <PointSidebarPoint/>
      <PointSidebarPoint/>
    </GlassAreaContainer>
  );
}
