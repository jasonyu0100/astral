import { ButtonInputProps } from '@/(types)/props/main';

export function SpaceChatChapterAdd({ ...props }: ButtonInputProps) {
  return (
    <button className='mt-[1rem] flex w-full' {...props}>
      <p className='animate-pulse-slow font-extraBold text-xl text-slate-700'>
        Add Chapter
      </p>
    </button>
  );
}
