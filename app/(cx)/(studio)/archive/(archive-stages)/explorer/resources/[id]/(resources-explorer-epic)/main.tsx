import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx, containerFx, roundedFx, borderFx } from '@/(design)/(fx)/data';
import React from 'react';
import { ResourcesBreadcrumbs } from './breadcrumbs/main';
import { ResourcesGrid } from './grid/main';

export function ResourcesBody() {
  return (
    <GlassAreaContainer
      name={ResourcesBody.name}
      sizeFx='flex-grow h-full'
      className={`${containerFx['col']} space-y-[3rem] overflow-auto px-[2rem] py-[2rem]`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-all']}
      roundedFx={roundedFx['rounded-container-sm']}
    >
      <ResourcesBreadcrumbs />
      <ResourcesGrid/>
    </GlassAreaContainer>
  );
}
