import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { borderStyles, containerStyles } from '@/(design)/(styles)/data';
import { SearchBarButton } from './button/main';
import SearchBarInput from './input/main';
import { useContext, useState } from 'react';
import { ResourcesHandlerContext } from '@/(logic)/internal/handler/explorer/resources/main';

export function CollectionHeaderSearch() {
  const resourcesHandler = useContext(ResourcesHandlerContext)
  const [query, changeQuery] = useState('');

  return (
    <GlassContainer
      displayName={CollectionHeaderSearch.name}
      sizeStyle='flex-grow h-[3rem]'
      borderStyle={`${borderStyles['border-b']}`}
      className={`${containerStyles.row}`}
    >
      <SearchBarInput
        onChange={(e: any) => {
          changeQuery(e.target.value);
        }}
        value={query}
      />
      <SearchBarButton
        onClick={() => {
          resourcesHandler.resourceActions.searchResources(query);
          changeQuery('');
        }}
      />
    </GlassContainer>
  );
}
