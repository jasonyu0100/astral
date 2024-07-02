import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForCollectionResourceList } from '@/(server)/(controller)/gallery/collection/resource/list';
import { ContextForCollectionResourceObj } from '@/(server)/(model)/gallery/collection/resource/main';
import { useContext } from 'react';
import { SpaceMapCreateResourceModal } from '../../../../../(modal)/add/resource/main';
import { SpaceMapAddResource } from './add/main';
import { SpaceMapResourceResource } from './resource/main';

export function SpaceMapResourcesResults() {
  const resourceListController = useContext(ContextForCollectionResourceList);
  const openableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <SpaceMapCreateResourceModal />
        <div
          className='flex w-full flex-col overflow-auto px-[1rem]'
          style={{ height: 'calc(100% - 4rem - 80px)' }}
        >
          <div className='grid grid-cols-2 gap-[1rem]'>
            {resourceListController.state.objs.map((resource) => (
              <ContextForCollectionResourceObj.Provider value={resource}>
                <SpaceMapResourceResource />
              </ContextForCollectionResourceObj.Provider>
            ))}
            <SpaceMapAddResource />
          </div>
        </div>
      </ContextForOpenable.Provider>
    </>
  );
}
