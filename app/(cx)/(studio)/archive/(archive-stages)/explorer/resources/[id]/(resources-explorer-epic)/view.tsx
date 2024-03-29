import { ResourcesBreadcrumbs } from './breadcrumbs/main';
import { ResourcesContainer } from './container/main';
import { ResourcesGrid } from './grid/main';

export function ResourcesView() {
  return <ResourcesContainer>
    <ResourcesBreadcrumbs />
    <ResourcesGrid />
  </ResourcesContainer>;
}
