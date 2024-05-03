import { GlassAreaContainer } from '@/(pkgs)/(glass)/area/main';
import { glassFx, containerFx } from '@/(fx)/data';
import React from 'react';

export function MapSidebar() {
  return (
    <GlassAreaContainer
      name={MapSidebar.name}
      sizeFx='max-w-[500px] min-w-[250px] w-1/4 h-full flex-shrink-0'
      className={`${containerFx['col']} space-y-[1rem] p-[1rem]`}
      glassFx={glassFx['glass-5']}
    >
    </GlassAreaContainer>
  );
}
