import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassStyles, containerStyles, roundedStyles } from '@/(design)/(styles)/data';
import React from 'react';
import { ResourcesBreadcrumbs } from './breadcrumbs/main';
import { ResourcesGrid } from './grid/main';

export function ResourcesBody() {
  return (
    <GlassAreaContainer
      name={ResourcesBody.name}
      size='flex-grow h-full'
      className={`${containerStyles['col']} space-y-[3rem] overflow-auto px-[2rem] py-[2rem]`}
      glass={glassStyles['glass-5']}
      rounded={roundedStyles['rounded-container-sm']}
    >
      <ResourcesBreadcrumbs />
      <ResourcesGrid/>
    </GlassAreaContainer>
  );
}
