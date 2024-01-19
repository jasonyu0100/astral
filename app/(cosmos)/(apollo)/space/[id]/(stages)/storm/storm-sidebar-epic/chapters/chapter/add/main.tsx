import { ButtonInputProps } from '@/(common)/types/main';

export function StormChapterAdd({ ...props }: ButtonInputProps) {
  return (
    <button className='flex w-full' {...props}>
      <p className='text-slate-500 font-extraBold text-xl'>Add Chapter</p>
    </button>
  );
}
