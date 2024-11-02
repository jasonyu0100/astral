import { ContextForCollectionResourceList } from '@/architecture/controller/gallery/collection/resource/list';
import { ContextForCollectionResourceObj } from '@/architecture/model/gallery/collection/resource/main';
import { ElementResource } from '@/components/element/resource/main';
import { useContext } from 'react';

export function JournalDailyTableContents() {
  const resourceListController = useContext(ContextForCollectionResourceList);
  return (
    <div className='w-full columns-3 gap-[1rem] space-y-[1rem]'>
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
