import { ContextForCollectionResourceList } from '@/architecture/controller/gallery/collection/resource/list';
import { ContextForCollectionResourceObj } from '@/architecture/model/gallery/collection/resource/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { SpaceSpaceResourcesBack } from '../back/main';
import { SpaceSpaceAddResource } from './add/main';
import { SpaceSpaceResourceResource } from './resource/main';

export function SpaceSpaceResourcesResults() {
  const resourceListController = useContext(ContextForCollectionResourceList);

  return (
    <div
      className='flex h-full w-full flex-col items-center space-y-[1rem] overflow-auto p-[1rem]'
      style={{ height: '100%' }}
    >
      <SpaceSpaceResourcesBack />
      {resourceListController.state.more.queryResults.map((resource) => (
        <ContextForCollectionResourceObj.Provider value={resource}>
          <SpaceSpaceResourceResource />
        </ContextForCollectionResourceObj.Provider>
      ))}
      <HorizontalDivider />
      <SpaceSpaceAddResource />
    </div>
  );
}
