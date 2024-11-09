import { DriveUploadsDailyTableContents } from './list/main';

export function DriveUploadsDailyTable() {
  return (
    <div
      style={{ height: '100%', width: '100%' }}
      className='overflow-auto p-[2rem]'
    >
      <DriveUploadsDailyTableContents />
    </div>
  );
}
