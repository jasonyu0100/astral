import { FileContext } from '@/(logic)/internal/data/infra/model/resource/file/main';
import { useContext } from 'react';

export function UploadedFileInfo() {
  const file = useContext(FileContext);
  return (
    <div className='flex flex-col'>
      <p className='text-lg font-bold'>{file.title}</p>
      <p className='text-sm text-slate-500'>{file.fileType}</p>
      <p className='text-md text-slate-500'>{file.size} bytes</p>
    </div>
  );
}
