import { ButtonInputProps } from '@/(common)/types/main';

export function StormChapterAdd({ ...props }: ButtonInputProps) {
  return (
    <button className='flex w-full' {...props}>
      <p className='font-extraBold text-xl text-slate-500'>Add Chapter</p>
    </button>
  );
}
