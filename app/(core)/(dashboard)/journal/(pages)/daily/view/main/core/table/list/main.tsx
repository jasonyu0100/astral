import { ContextForCollectionResourceList } from '@/(server)/controller/gallery/collection/resource/list';
import { ContextForCollectionResourceObj } from '@/(server)/model/gallery/collection/resource/main';
import { useContext } from 'react';
import { JournalDailyTableListItem } from './item/main';

export function JouranlRecordTableList() {
  const resourceListController = useContext(ContextForCollectionResourceList);
  return (
    <div className='flex w-full flex-col'>
      {resourceListController.state.objs.map((resource) => (
        <ContextForCollectionResourceObj.Provider
          value={resource}
          key={resource.id}
        >
          <JournalDailyTableListItem />
        </ContextForCollectionResourceObj.Provider>
      ))}
    </div>
  );
}
