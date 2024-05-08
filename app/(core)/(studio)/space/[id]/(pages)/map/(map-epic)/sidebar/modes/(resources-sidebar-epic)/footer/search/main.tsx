import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { borderFx, containerFx } from '@/(style)/data';
import { SearchBarButton } from './button/main';
import SearchBarInput from './input/main';
import { useContext, useState } from 'react';
import { ResourcesHandlerContext } from '@/(types)/handler/explorer/resources/main';

export function CollectionHeaderSearch() {
  const resourcesHandler = useContext(ResourcesHandlerContext)
  const [query, changeQuery] = useState('');

  return (
    <GlassAreaContainer
      name={CollectionHeaderSearch.name}
      sizeFx='flex-grow h-[3rem]'
      borderFx={`${borderFx['border-b']}`}
      className={`${containerFx.row}`}
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
    </GlassAreaContainer>
  );
}
