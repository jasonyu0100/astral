import { CollectionsBreadcrumbs } from './breadcrumbs/main';
import { CollectionsContainer } from './container/main';
import { CollectionsGrid } from './grid/main';
import { CollectionsSearch } from './search/main';

export function CollectionsView() {
  return (
    <CollectionsContainer>
      <CollectionsSearch/>
      <CollectionsGrid />
      <CollectionsBreadcrumbs />
    </CollectionsContainer>
  );
}
