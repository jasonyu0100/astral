import { UploadedFileEntryPreview } from './preview/main';
import { UploadedFileEntryInfo } from './info/main';

export function UploadedFileEntryBody() {
  return (
    <div className='flex flex-row items-center space-x-[2rem]'>
      <UploadedFileEntryPreview />
      <UploadedFileEntryInfo />
    </div>
  );
}
