import { ContextForFileElement } from '@/architecture/model/elements/file/main';
import { useContext } from 'react';

export function UploadedFileEntryInfo() {
  const file = useContext(ContextForFileElement);
  return (
    <div className='flex flex-col'>
      <p className='text-lg font-bold text-slate-300'>{file.title}</p>
      <p className='text-sm text-slate-500'>{file.ext}</p>
    </div>
  );
}
