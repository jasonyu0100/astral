import { BrandUploadsDailyTableContents } from './list/main';

export function BrandUploadsDailyTable() {
  return (
    <div
      style={{ height: '100%', width: '100%' }}
      className='overflow-auto p-[2rem]'
    >
      <BrandUploadsDailyTableContents />
    </div>
  );
}
