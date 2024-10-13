import { ContextForFileElem } from '@/(server)/model/elements/file/main';
import { useContext } from 'react';

export function UploadedFileEntryInfo() {
  const file = useContext(ContextForFileElem);
  return (
    <div className='flex flex-col'>
      <p className='text-lg font-bold text-slate-500'>{file.title}</p>
      <p className='text-sm text-slate-500'>{file.ext}</p>
    </div>
  );
}
