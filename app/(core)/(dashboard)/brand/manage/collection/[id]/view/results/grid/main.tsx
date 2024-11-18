import { BrandManageModals } from '@/(core)/(dashboard)/brand/manage/modals/controller/main';
import { ContextForCollectionResourceList } from '@/architecture/controller/gallery/collection/resource/list';
import { ContextForCollectionResourceObj } from '@/architecture/model/gallery/collection/resource/main';
import { useContext } from 'react';
import { BrandManageCollectionResourceAdd } from '../../../../../common/resource/add/main';
import { BrandManageResource } from '../../../../../common/resource/main';

export function BrandManageCollectionResourcesGrid() {
  const resourceListController = useContext(ContextForCollectionResourceList);

  return (
    <div className='flex-grow overflow-auto' style={{ height: '100%' }}>
      <div className='grid grid-cols-5 gap-[2rem] pr-[2rem]'>
        {resourceListController.state.more.queryResults.map((resource) => (
          <ContextForCollectionResourceObj.Provider
            value={resource}
            key={resource.id}
          >
            <BrandManageModals>
              <BrandManageResource key={resource.id} />
            </BrandManageModals>
          </ContextForCollectionResourceObj.Provider>
        ))}
        <BrandManageCollectionResourceAdd />
      </div>
    </div>
  );
}
