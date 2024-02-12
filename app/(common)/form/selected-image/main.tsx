import { FileObj } from '@/tables/resource/file/main';

export function SelectedImage({ selected }: { selected: FileObj }) {
  return (
    <div className='flex w-full flex-col items-center py-[1rem]'>
      <img
        className='h-[200px] w-[200px] flex-shrink-0 rounded-full bg-slate-300'
        src={selected?.src}
      />
    </div>
  );
}
