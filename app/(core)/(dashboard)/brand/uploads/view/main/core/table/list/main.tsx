import { ContextForCollectionResourceList } from '@/architecture/controller/gallery/collection/resource/list';
import { ContextForCollectionResourceObj } from '@/architecture/model/gallery/collection/resource/main';
import { ElementResource } from '@/components/element/resource/main';
import { useContext } from 'react';

export function BrandUploadsDailyTableContents() {
  const resourceListController = useContext(ContextForCollectionResourceList);
  return (
    <div className='flex w-full flex-row flex-wrap items-center gap-[2rem]'>
      {resourceListController.state.objs.map((resource) => (
        <div className='w-[200px] flex-shrink-0'>
          <ContextForCollectionResourceObj.Provider
            value={resource}
            key={resource.id}
          >
            <ElementResource />
          </ContextForCollectionResourceObj.Provider>
        </div>
      ))}
    </div>
  );
}
