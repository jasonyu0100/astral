import { ContextForCollectionResourceList } from '@/architecture/controller/gallery/collection/resource/list';
import { useContext } from 'react';
import { UploadsDailyFooter } from './footer/main';
import { UploadsDailyEmpty } from './table/empty/main';
import { UploadsDailyTable } from './table/main';

export function UploadsDailyCore() {
  const resourceListController = useContext(ContextForCollectionResourceList);
  return (
    <div className='flex h-full flex-grow flex-col overflow-auto'>
      {resourceListController.state.objs.length > 0 ? (
        <>
          <UploadsDailyTable />
          <UploadsDailyFooter />
        </>
      ) : (
        <UploadsDailyEmpty />
      )}
    </div>
  );
}
