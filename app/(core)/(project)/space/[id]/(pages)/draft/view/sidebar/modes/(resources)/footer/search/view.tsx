import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { ContextForCollectionResourceList } from '@/(server)/(controller)/gallery/collection/resource/list';
import { borderFx } from '@/(style)/data';
import { ChangeEvent, useContext } from 'react';
import { FooterSearchButton } from './button/view';
import FooterSearchInput from './input/main';

export function CollectionHeaderSearch() {
  const resourceListController = useContext(ContextForCollectionResourceList);

  return (
    <GlassAreaContainer
      name={CollectionHeaderSearch.name}
      sizeFx='flex-grow h-[3rem]'
      borderFx={`${borderFx['border-b']}`}
      className={'flex'}
    >
      <FooterSearchInput
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          resourceListController.actions.stateActions.updateQuery(
            e.target.value,
          );
        }}
        value={resourceListController.state.more.query}
      />
      <FooterSearchButton
        onClick={() => {
          resourceListController.actions.stateActions.searchQuery();
          resourceListController.actions.stateActions.updateQuery('');
        }}
      />
    </GlassAreaContainer>
  );
}
