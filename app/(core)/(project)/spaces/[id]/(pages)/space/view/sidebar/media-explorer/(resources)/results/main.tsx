import { ContextForCollectionResourceList } from '@/architecture/controller/gallery/collection/resource/list';
import { ContextForCollectionResourceObj } from '@/architecture/model/gallery/collection/resource/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { SpacesSpaceResourcesBack } from '../back/main';
import { SpacesSpaceAddResource } from './add/main';
import { SpacesSpaceResourceResource } from './resource/main';

export function SpacesSpaceResourcesResults() {
  const resourceListController = useContext(ContextForCollectionResourceList);

  return (
    <div
      className='flex h-full w-full flex-col items-center space-y-[1rem] overflow-auto p-[1rem]'
      style={{ height: '100%' }}
    >
      <SpacesSpaceResourcesBack />
      {resourceListController.state.more.queryResults.map((resource) => (
        <ContextForCollectionResourceObj.Provider value={resource}>
          <SpacesSpaceResourceResource />
        </ContextForCollectionResourceObj.Provider>
      ))}
      <HorizontalDivider />
      <SpacesSpaceAddResource />
    </div>
  );
}
