import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { HorizontalDivider } from '@/(components)/(indicator)/divider/horizontal/main';
import { JournalRecordCollectionModal } from '@/(core)/(dashboard)/journal/(modal)/add/section/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForGalleryCollectionList } from '@/(server)/(controller)/gallery/collection/list';
import { ContextForCollectionResourceList } from '@/(server)/(controller)/gallery/collection/resource/list';
import { glassFx } from '@/(style)/data';
import { useContext } from 'react';
import { JournalRecordSidebarAdd } from './add/main';

export function JournalRecordSidebar() {
  const collectionListController = useContext(ContextForGalleryCollectionList);
  const resourceListController = useContext(ContextForCollectionResourceList);
  const openableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <JournalRecordCollectionModal />
      </ContextForOpenable.Provider>
      <GlassAreaContainer
        name={JournalRecordSidebar.name}
        sizeFx='w-[300px] h-full'
        className={`flex flex-col space-y-[1rem] p-[1rem]`}
        glassFx={glassFx['glass-5']}
      >
        <JournalRecordSidebarAdd onClick={openableController.open} />
        <HorizontalDivider />
        {collectionListController.state.objs.length === 0 && (
          <p className='text-lg text-slate-500'>No sections</p>
        )}
        {resourceListController.state.objs.map((resource, index) => (
          <div className='font-bold text-white'>
            {index + 1}. {resource.title || 'Untitled'}
          </div>
        ))}
        {/* {collectionListController.state.objs.map((collection) => (
          <ContextForGalleryCollectionObj.Provider
            value={collection}
            key={collection.id}
          >
            <JournalRecordSidebarEntry
              onClick={() => {
                collectionListController.actions.stateActions.select(
                  collection,
                );
              }}
            />
          </ContextForGalleryCollectionObj.Provider>
        ))} */}
      </GlassAreaContainer>
    </>
  );
}
