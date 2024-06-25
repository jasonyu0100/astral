import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { ContextForGalleryCollectionList } from '@/(server)/(controller)/gallery/collection/list';
import { glassFx } from '@/(style)/data';
import { useContext } from 'react';
import { JournalRecordSidebarEntry } from './entry/main';

export function JournalRecordSidebar() {
  const collectionListController = useContext(ContextForGalleryCollectionList);
  return (
    <GlassAreaContainer
      name={JournalRecordSidebar.name}
      sizeFx='w-[300px] h-full'
      className={`flex flex-col space-y-[1rem] p-[1rem]`}
      glassFx={glassFx['glass-5']}
    >
      {collectionListController.state.objs.map((collection) => (
        <div
          className='cursor-pointer'
          onClick={() => {
            collectionListController.actions.stateActions.select(collection);
          }}
        >
          <JournalRecordSidebarEntry>
            <div className='flex flex-col'>
              <p className='text-lg font-bold text-slate-300'>Journal Entry</p>
              <p className='font-bold text-slate-300'>{collection.title}</p>
            </div>
          </JournalRecordSidebarEntry>
        </div>
      ))}
    </GlassAreaContainer>
  );
}
