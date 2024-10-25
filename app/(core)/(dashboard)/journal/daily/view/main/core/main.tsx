import { ContextForCollectionResourceList } from '@/(server)/controller/gallery/collection/resource/list';
import { useContext } from 'react';
import { JournalDailyFooter } from './footer/main';
import { JournalDailyEmpty } from './table/empty/main';
import { JournalDailyTable } from './table/main';

export function JournalDailyCore() {
  const resourceListController = useContext(ContextForCollectionResourceList);
  return (
    <div className='flex h-full flex-grow flex-col overflow-auto'>
      {resourceListController.state.objs.length > 0 ? (
        <>
          <JournalDailyTable />
          <JournalDailyFooter />
        </>
      ) : (
        <JournalDailyEmpty />
      )}
    </div>
  );
}
