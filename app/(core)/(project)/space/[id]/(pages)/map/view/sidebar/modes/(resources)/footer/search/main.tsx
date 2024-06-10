import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { borderFx } from '@/(style)/data';
import { SearchBarButton } from './button/main';
import SearchBarInput from './input/main';
import { useContext, useState } from 'react';
import { ContextForCollectionResourceList } from '@/(server)/(controller)/gallery/collection/resource/list';

export function CollectionHeaderSearch() {
  const resourceListController = useContext(ContextForCollectionResourceList)

  return (
    <GlassAreaContainer
      name={CollectionHeaderSearch.name}
      sizeFx='flex-grow h-[3rem]'
      borderFx={`${borderFx['border-b']}`}
      className={"flex"}
    >
      <SearchBarInput
        onChange={(e: any) => {
          resourceListController.actions.stateActions.updateQuery(e.target.value);
        }}
        value={resourceListController.state.query}
      />
      <SearchBarButton
        onClick={() => {
          resourceListController.actions.stateActions.searchQuery();
          resourceListController.actions.stateActions.updateQuery('');
        }}
      />
    </GlassAreaContainer>
  );
}
