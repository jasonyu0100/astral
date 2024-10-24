import { ContextForCollectionResourceList } from '@/(server)/controller/gallery/collection/resource/list';
import { ContextForCollectionResourceObj } from '@/(server)/model/gallery/collection/resource/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { SpacesMapResourcesBack } from '../back/main';
import { SpacesMapAddResource } from './add/main';
import { SpacesMapResourceResource } from './resource/main';

export function SpacesMapResourcesResults() {
  const resourceListController = useContext(ContextForCollectionResourceList);

  return (
    <div
      className='flex h-full w-full flex-col items-center space-y-[1rem] overflow-auto p-[1rem]'
      style={{ height: '100%' }}
    >
      <SpacesMapResourcesBack />
      {resourceListController.state.more.queryResults.map((resource) => (
        <ContextForCollectionResourceObj.Provider value={resource}>
          <SpacesMapResourceResource />
        </ContextForCollectionResourceObj.Provider>
      ))}
      <HorizontalDivider />
      <SpacesMapAddResource />
    </div>
  );
}
