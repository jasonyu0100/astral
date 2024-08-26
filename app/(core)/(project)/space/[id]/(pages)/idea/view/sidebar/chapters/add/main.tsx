import { ButtonInputProps } from '@/(types)/props/main';

export function SpaceIdeaChapterAdd({ ...props }: ButtonInputProps) {
  return (
    <button className='mt-[1rem] flex w-full' {...props}>
      <p className='animate-pulse-slow font-extraBold text-xl text-slate-400'>
        Add Chapter
      </p>
    </button>
  );
}
