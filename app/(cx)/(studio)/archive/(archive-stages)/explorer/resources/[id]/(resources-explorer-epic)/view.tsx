import { ResourcesBreadcrumbs } from './breadcrumbs/main';
import { ResourcesContainer } from './container/main';
import { ResourcesGrid } from './grid/main';
import { ResourcesSearch } from './search/main';

export function ResourcesView() {
  return (
    <ResourcesContainer>
      <ResourcesSearch />
      <ResourcesGrid />
      <ResourcesBreadcrumbs />
    </ResourcesContainer>
  );
}
