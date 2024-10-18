import { AstralUploadIcon } from '@/icons/upload/main';

export function UploadFileAreaPlaceholder() {
  return (
    <div className='flex h-full min-h-[5rem] w-full flex-row items-center space-x-[2rem] p-[1rem]'>
      <AstralUploadIcon className='h-[2.5rem] w-[2.5rem]' />
      <p className='text-lg font-light text-slate-500'>Upload your file here</p>
    </div>
  );
}
