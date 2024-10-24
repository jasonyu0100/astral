import { AstralUploadIcon } from '@/icons/upload/main';

export function UploadFilesAreaPlaceholder() {
  return (
    <div className='flex h-full min-h-[5rem] w-full flex-row items-center space-x-[3rem] p-[1rem]'>
      <AstralUploadIcon className='h-[2rem] w-[2rem] text-slate-500' />
      <p className='text-lg font-light text-slate-500'>
        Upload your files here
      </p>
    </div>
  );
}
