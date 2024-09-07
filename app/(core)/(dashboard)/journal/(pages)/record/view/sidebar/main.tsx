import { JournalRecordCollectionModal } from '@/(core)/(dashboard)/journal/(modal)/add/section/main';
import { ContextForGalleryCollectionList } from '@/(server)/controller/gallery/collection/list';
import { ContextForCollectionResourceList } from '@/(server)/controller/gallery/collection/resource/list';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { useContext } from 'react';

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
      ></GlassAreaContainer>
    </>
  );
}
