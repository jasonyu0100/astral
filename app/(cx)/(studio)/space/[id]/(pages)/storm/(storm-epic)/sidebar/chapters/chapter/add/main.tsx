import { ButtonInputProps } from '@/(lgx)/types/element/main';

export function StormChapterAdd({ ...props }: ButtonInputProps) {
  return (
    <button className='flex w-full mt-[1rem]' {...props}>
      <p className='font-extraBold text-xl text-slate-400 animate-pulse-slow'>Add Chapter</p>
    </button>
  );
}
