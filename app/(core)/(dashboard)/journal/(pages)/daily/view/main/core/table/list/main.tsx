import { ContextForCollectionResourceList } from '@/(server)/controller/gallery/collection/resource/list';
import { ContextForCollectionResourceObj } from '@/(server)/model/gallery/collection/resource/main';
import { ElementResource } from '@/ui/element/resource/main';
import { useContext } from 'react';

export function JournalDailyTableContents() {
  const resourceListController = useContext(ContextForCollectionResourceList);
  return (
    <div className='grid grid-cols-3 items-center justify-center gap-[2rem]'>
      {resourceListController.state.objs.map((resource) => (
        <ContextForCollectionResourceObj.Provider
          value={resource}
          key={resource.id}
        >
          <ElementResource />
        </ContextForCollectionResourceObj.Provider>
      ))}
    </div>
  );
}
