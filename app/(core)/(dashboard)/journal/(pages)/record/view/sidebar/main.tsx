import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { JournalRecordCollectionModal } from '@/(core)/(dashboard)/journal/(modal)/add/section/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForGalleryCollectionList } from '@/(server)/(controller)/gallery/collection/list';
import { ContextForGalleryCollectionObj } from '@/(server)/(model)/gallery/collection/main';
import { glassFx } from '@/(style)/data';
import { useContext } from 'react';
import { JournalRecordSidebarAdd } from './add/main';
import { JournalRecordSidebarEntry } from './entry/main';

export function JournalRecordSidebar() {
  const collectionListController = useContext(ContextForGalleryCollectionList);
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
        glassFx={glassFx['glass-20']}
      >
        <JournalRecordSidebarAdd onClick={openableController.open} />
        <HorizontalDivider />
        {collectionListController.state.objs.length === 0 && (
          <p className='text-lg text-slate-700'>No sections</p>
        )}
        {collectionListController.state.objs.map((collection) => (
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
        ))}
      </GlassAreaContainer>
    </>
  );
}
