import React from 'react';
import { ResourcesBreadcrumbs } from './breadcrumbs/main';
import { ResourcesGrid } from './grid/main';
import { ResourcesContainer } from './container/main';
import { ResourcesSearch } from './search/main';

export function ResourcesBody() {
  return (
    <ResourcesContainer>
      <ResourcesSearch/>
      <ResourcesGrid />
      <ResourcesBreadcrumbs />
    </ResourcesContainer>
  );
}
