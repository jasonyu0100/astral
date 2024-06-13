import { useContext } from 'react';
import { ContextForGalleryCollectionObj } from '@/(server)/(model)/gallery/collection/main';
import { ContextForSidebarModals } from '@/(core)/(project)/space/[id]/(pages)/board/view/sidebar/(modals)/create/main';
import { SidebarCollection } from '@/(components)/(media)/(collection)/sidebar/main';
import { SidebarCollectionAdd } from '@/(components)/(media)/(collection)/sidebar/add/main';
import { ContextForGalleryCollectionList } from '@/(server)/(controller)/gallery/collection/list';

export function CollectionsInterface() {
  const collectionListController = useContext(ContextForGalleryCollectionList);
  const modalContext = useContext(ContextForSidebarModals);

  return (
    <div className='flex h-full w-full flex-col'>
      <div className='flex w-full flex-row flex-wrap space-y-[2rem] overflow-auto'>
        <SidebarCollectionAdd
          onClick={() => {
            modalContext.createCollection.open();
          }}
        />
        {collectionListController.state.objs.map((collection) => (
          <ContextForGalleryCollectionObj.Provider value={collection} key={collection.id}>
            <SidebarCollection key={collection.id} />
          </ContextForGalleryCollectionObj.Provider>
        ))}
      </div>
      <p className='font-bold text-slate-500'>Back</p>
    </div>
  );
}
