import { UploadsDailyTableContents } from './list/main';

export function UploadsDailyTable() {
  return (
    <div
      style={{ height: '100%', width: '100%' }}
      className='overflow-auto p-[2rem]'
    >
      <UploadsDailyTableContents />
    </div>
  );
}
