import { CollectionsBreadcrumbs } from './breadcrumbs/main';
import { CollectionsContainer } from './container/main';
import { CollectionsGrid } from './grid/main';

export function CollectionsView() {
  return (
    <CollectionsContainer>
      <CollectionsBreadcrumbs />
      <CollectionsGrid />
    </CollectionsContainer>
  );
}
