import { CollectionsContainer } from './container/main';
import { CollectionsSearch } from './search/main';
import { CollectionsContent } from './results/main';

export function CollectionsResults() {
  return (
    <CollectionsContainer>
      <CollectionsSearch />
      <CollectionsContent />
    </CollectionsContainer>
  );
}
