import { FileObj } from '@/(ouros)/(model)/resource/file/main';

export function UploadedFileInfo({ file }: { file: FileObj }) {
  return (
    <div className='flex flex-row items-center space-x-[2rem]'>
      <img
        src={file.src}
        alt={file.title}
        className='aspect-square h-[100px] bg-black object-cover shadow-md'
      />
      <div className='flex flex-col'>
        <p className='text-lg font-bold'>{file.title}</p>
        <p className='text-sm text-slate-500'>{file.fileType}</p>
        <p className='text-md text-slate-500'>{file.size} bytes</p>
      </div>
    </div>
  );
}
