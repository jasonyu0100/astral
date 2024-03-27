import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import { glassStyles, containerStyles, roundedStyles } from '@/(design)/(styles)/data';
import React from 'react';
import { ResourcesBreadcrumbs } from './breadcrumbs/main';
import { ResourcesGrid } from './grid/main';

export function ResourcesBody() {
  return (
    <GlassAreaContainer
      displayName={ResourcesBody.name}
      sizeStyle='flex-grow h-full'
      className={`${containerStyles['col']} space-y-[3rem] overflow-auto px-[2rem] py-[2rem]`}
      glassStyle={glassStyles['glass-5']}
      roundedStyle={roundedStyles['rounded-container-sm']}
    >
      <ResourcesBreadcrumbs />
      <ResourcesGrid/>
    </GlassAreaContainer>
  );
}
