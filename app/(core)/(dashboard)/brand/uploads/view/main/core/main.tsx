import { ContextForCollectionResourceList } from '@/architecture/controller/gallery/collection/resource/list';
import { useContext } from 'react';
import { BrandUploadsDailyFooter } from './footer/main';
import { BrandUploadsDailyEmpty } from './table/empty/main';
import { BrandUploadsDailyTable } from './table/main';

export function BrandUploadsDailyCore() {
  const resourceListController = useContext(ContextForCollectionResourceList);
  return (
    <div className='flex h-full flex-grow flex-col overflow-auto'>
      {resourceListController.state.objs.length > 0 ? (
        <>
          <BrandUploadsDailyTable />
          <BrandUploadsDailyFooter />
        </>
      ) : (
        <BrandUploadsDailyEmpty />
      )}
    </div>
  );
}
