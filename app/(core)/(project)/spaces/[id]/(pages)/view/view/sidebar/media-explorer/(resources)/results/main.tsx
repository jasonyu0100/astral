import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { ContextForCollectionResourceList } from '@/server/controller/gallery/collection/resource/list';
import { ContextForCollectionResourceObj } from '@/server/model/gallery/collection/resource/main';
import { useContext } from 'react';
import { SpacesViewResourcesBack } from '../back/main';
import { SpacesViewAddResource } from './add/main';
import { SpacesViewResourceResource } from './resource/main';

export function SpacesViewResourcesResults() {
  const resourceListController = useContext(ContextForCollectionResourceList);

  return (
    <div
      className='flex h-full w-full flex-col items-center space-y-[1rem] overflow-auto p-[1rem]'
      style={{ height: '100%' }}
    >
      <SpacesViewResourcesBack />
      {resourceListController.state.more.queryResults.map((resource) => (
        <ContextForCollectionResourceObj.Provider value={resource}>
          <SpacesViewResourceResource />
        </ContextForCollectionResourceObj.Provider>
      ))}
      <HorizontalDivider />
      <SpacesViewAddResource />
    </div>
  );
}
