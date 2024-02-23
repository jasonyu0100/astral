import { ButtonInputProps } from '@/(components)/types/main';

export function StormChapterAdd({ ...props }: ButtonInputProps) {
  return (
    <button className='flex w-full mt-[1rem]' {...props}>
      <p className='font-extraBold text-xl text-slate-500'>Add Chapter</p>
    </button>
  );
}
