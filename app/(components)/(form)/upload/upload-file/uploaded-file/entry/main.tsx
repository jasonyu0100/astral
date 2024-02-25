import {
  FileContext,
  FileObj,
} from '@/(logic)/internal/data/infra/model/resource/file/main';
import { UploadedFilePreview } from './preview/main';
import { UploadedFileInfo } from './info/main';

export function UploadedFileEntry({ file }: { file: FileObj }) {
  return (
    <FileContext.Provider value={file}>
      <div className='flex flex-row items-center space-x-[2rem]'>
        <UploadedFilePreview />
        <UploadedFileInfo />
      </div>
    </FileContext.Provider>
  );
}
