import { ContextForCollectionResourceList } from '@/architecture/controller/gallery/collection/resource/list';
import { ContextForCollectionResourceObj } from '@/architecture/model/gallery/collection/resource/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { SpacesIdeasResourcesBack } from '../back/main';
import { SpacesIdeasAddResource } from './add/main';
import { SpacesIdeasResourceResource } from './resource/main';

export function SpacesIdeasResourcesResults() {
  const resourceListController = useContext(ContextForCollectionResourceList);

  return (
    <div
      className='flex h-full w-full flex-col items-center space-y-[1rem] overflow-auto p-[1rem]'
      style={{ height: '100%' }}
    >
      <SpacesIdeasResourcesBack />
      {resourceListController.state.more.queryResults.map((resource) => (
        <ContextForCollectionResourceObj.Provider value={resource}>
          <SpacesIdeasResourceResource />
        </ContextForCollectionResourceObj.Provider>
      ))}
      <HorizontalDivider />
      <SpacesIdeasAddResource />
    </div>
  );
}
