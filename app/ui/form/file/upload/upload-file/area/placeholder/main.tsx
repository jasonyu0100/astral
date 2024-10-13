import { AstralUploadIcon } from '@/icons/upload/main';

export function UploadFileAreaPlaceholder() {
  return (
    <div className='flex h-full w-full flex-row items-center space-x-[1rem]'>
      <AstralUploadIcon />
      <p className='mt-1 text-lg font-bold text-slate-500'>
        Upload your file here
      </p>
    </div>
  );
}
