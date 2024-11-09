import { ContextForCollectionResourceList } from '@/architecture/controller/gallery/collection/resource/list';
import { useContext } from 'react';
import { DriveUploadsDailyFooter } from './footer/main';
import { DriveUploadsDailyEmpty } from './table/empty/main';
import { DriveUploadsDailyTable } from './table/main';

export function DriveUploadsDailyCore() {
  const resourceListController = useContext(ContextForCollectionResourceList);
  return (
    <div className='flex h-full flex-grow flex-col overflow-auto'>
      {resourceListController.state.objs.length > 0 ? (
        <>
          <DriveUploadsDailyTable />
          <DriveUploadsDailyFooter />
        </>
      ) : (
        <DriveUploadsDailyEmpty />
      )}
    </div>
  );
}
