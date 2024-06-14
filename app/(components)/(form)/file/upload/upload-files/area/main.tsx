import { UploadFilesAreaPlaceholder } from './placeholder/main';
import { UploadFilesAreaInterface } from './upload/main';

export function UploadFilesArea() {
  return (
    <div className='relative h-[200px] border-b border-black'>
      <UploadFilesAreaInterface />
      <UploadFilesAreaPlaceholder />
    </div>
  );
}
