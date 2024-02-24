import { Glass } from '@/(components)/glass/main';
import { backgroundStyles, containerStyles } from '@/(components)/styles/data';
import React from 'react';
import { ResourcesBreadcrumbs } from './breadcrumbs/main';
import { ResourcesGrid } from './grid/main';

export function ResourcesBody() {
  return (
    <Glass
      displayName={ResourcesBody.name}
      sizeStyle='flex-grow h-full'
      className={`${containerStyles['col']} space-y-[3rem] overflow-auto px-[2rem] py-[2rem]`}
      backgroundStyle={backgroundStyles['glass-5']}
    >
      <ResourcesBreadcrumbs />
      <ResourcesGrid/>
    </Glass>
  );
}
